Matrices
==========

.. role:: b(code)
  :language: bash
  :class: highlight

.. role:: p(code)
  :language: python
  :class: highlight


In a previous experience I had to develop a backend system to store data matrices efficiently.
These matrices were used to perform real time computations in a :b:`Django` application.

Compute process :

- Request the backend
- Retrieve matrices
- :b:`Load matrices into numpy nArrays`
- Perform computation
- Return results

All this process had to be performed as fast as possible. The matrices could have different shapes ( square, rectangular )
and contain **more than 2 000 rows and lines.**

Each call to our APIs could request several matrices to perform it's computations. The performances of our backend were
crushed by these calls, we had to redesign the system in order order to solve performance issues and give us a margin
to grow.

Legacy
~~~~~~~~~~~~~~~~

First lets explore the legacy matrices storage system, its advantages and disadvantages.

The Matrices were stored in the database and modelized as follows :

:b:`&> cat matrix/models.py`

.. code-block:: python

    class Node(models.Model)
        lat = DecimalField(...)
        lon = DecimalField(...)

    class Matrix(models.Model):
        type = models.ChoiceField(choices=MATRIX_CHOICES, ....)
        weekday = models.IntegerField(max_length=1, choices=DAYS_OF_WEEK)

    class TripDistance(models.Model):
        matrix = models.ForeignKey(matrix, ...)
        from_node = models.ForeignKey(Node, ...)
        to_node = models.ForeignKey(Node, ...)
        distance = models.SmallPositiveIntegerField(...)


Advantages :

- A matrix entry can easily be retrieved :p:`trip = TripDistance.objects.get(matrix=1, from_node_id=111, to_node_id=222)`
- A **single** matrix entry can easily be edited :p:`trip.update(distance=123)`
- Retrieving precise matrix entries is very fast
- Business logic is deported to the database, the matrix and it's entries are modelized as single entities

Disadvantages :

- The more nodes you want to retrieve the more time it takes
- Adding a line or a column in the matrix will generate a lot of queries
- Working with numpy is hard, you need to retrieve the entries you are interested in and rearrange them in lines and columns to create a :p:`Numpy` matrix
- Editing several ( hundreds, thousands ) of entries is complex. It is easy to edit a :p:`Numpy` matrix, but then it needs to be denormalized into database objects.
- During edition we need to keep track of  modified entries and update only the associated database objects. Updating the whole matrix would generate to many database queries.

Overall this database modelization worked for a time, but hit a **performance bottleneck** when matrices reached
**800 nodes**, which correspond to :b:`800 * 800 = 640 000` database entries ( for a single matrix ).

Our matrices were growing, we added caching and several "easy" optimizations, but the remedy was only temporary,
**we faced a real bottleneck, the database modelization had to be redesigned**.


New design
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To redesign the system I considered several options to store the matrices, such as :b:`Redis` or :b:`file system` :

- :b:`Redis` did not guarantee sufficient data longevity, our redis cluster could crash and we could loose the data.
- :b:`the file system` was not an option because of our :b:`stateless infrastructure` with multiple servers, one server could edit a matrix without others knowing about it.

I ended up using the database again, but instead of storing each matrix entry separately, I stored the whole matrix
as a binary representation of a :p:`Numpy Array` directly in a :p:`Postgres BinaryField`.

One major benefit of this approach is that the code did not have to serialize / deserialize the matrix when writing / reading
it from the database, the serialization/deserialization process was pretty slow and avoiding it greatly improved the overall performances.

To make this approach reusable and easy to use, I created a **Custom Django database field**

Django custom field documentation : https://docs.djangoproject.com/en/5.0/howto/custom-model-fields/

The field would take a :p:`numpy matrix`, then :

- retrieve the matrix shape : :p:`h, w = matrix.shape()`
- convert the shape into a binary string : :p:`shape = struct.pack(">II", h, w)`
- convert the matrix into a binary string and prepend the shape to it : :p:`encoded_matrix = shape + value.astype(numpy.uint32).tobytes()`

To reduce the matrix size and enhance performance I changed the numpy matrix data type to be :p:`Uint32` instead of :p:`Double`,
which **divided the overall matrix weight by two** !


:b:`&> cat matrix/fields.py`

.. code-block:: python

    import numpy
    import struct
    from django.db import models


    class NumpyMatrixField(models.BinaryField):
        """
        Dump a numpy arrays to bytes and store it in a Postgres BinaryField.
        Matrix shape is converted to a binary string
        and stored alongside the matrix.
        """

        description = "A field to save Numpy NxP arrays into a postgres BinaryField"

        # Create a bytes string containing matrix shape.
        # '>II' is the encoding of the value
        #    `>` BigIndian byte order is used
        #    `II` means that the byte string will contains two integers ( height / width )
        _STRUCT_MATRIX_SHAPE = ">II"

        MATRIX_DTYPE = numpy.uint32

        def get_db_prep_value(self, value, *args, **kwargs):
            """
            Transform numpy array into a binary string in order to store it in a BinaryField.
            Array's shape is prepended to the binary string.
            """
            if value is None:
                return None
            h, w = value.shape
            # create a binary string containing the matrix shape
            shape = struct.pack(self._STRUCT_MATRIX_SHAPE, h, w)
            encoded_matrix = shape + value.astype(MATRIX_DTYPE).tobytes()
            return super().get_db_prep_value(encoded_matrix, *args, **kwargs)

        def to_python(self, value):
            """Transforms the stored binary string in the database into a numpy.ndarray."""
            if value is None:
                return None

            # Retrieve matrix shape from binary string
            shape = struct.unpack(self._STRUCT_MATRIX_SHAPE, value[:8])
            # Retrieve matrix view from buffer and take ownership of its copy
            return np.frombuffer(value, dtype=MATRIX_DTYPE, offset=8).reshape(shape).copy()

        def from_db_value(self, value, *args, **kwargs):
            return value.astype(MATRIX_DTYPE)



This field allowed the following database modelization :

:b:`&> cat matrix/models.py`

.. code-block:: python

    class Node(models.Model)
        lat = DecimalField(...)
        lon = DecimalField(...)

    class Matrix(models.Model):
        type = models.ChoiceField(choices=MATRIX_CHOICES, ....)
        weekday = models.IntegerField(max_length=1, choices=DAYS_OF_WEEK)
        value = NumpyMatrixField()


And could be used as follows :

.. code-block:: python

    matrix = Matrix.objects.get(id=1)
    matrix.value = np.array([[1, 2], [3, 4]])
    matrix.save()

Which is very intuitive and easy for other developers.


Performances benefits
----------------------

We gained several orders of magnitude of performance, this modelization allowed us to scale to matrices from a maximum of
**800 x 800 to 4000 x 4000** while staying **under 200ms** to retrieve a single matrix and around 400ms for an update.

*One could add a Redis or Memcached cache on top of that to gain even more performances.*
\

Conclusion
------------

In this post we saw how to create a custom field to store large numpy matrices and get decent performances for pretty "large"
matrices.

