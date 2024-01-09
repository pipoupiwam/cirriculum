Make Freezegun work with SqlAlchemy
=====================================

.. role:: bash(code)
  :language: bash
  :class: highlight

:bash:`Freezegun` allows to freeze time during tests, this is particularly useful when testing APIs with timestamps.

By default :bash:`freezegun` does not work well with :bash:`SqlAlchemy`, the timestamps it generates are not frozen.

You can use the following approach to make :bash:`freezegun` work with :bash:`SqlAlchemy`

.. code-block:: python

    class Model(Base):
        ...
        created_at = Column(DateTime, default=datetime.utcnow)
        ...

.. code-block:: python

    def _now():
        return datetime.utcnow()

    class Model(Base):
        ...
        created_at = Column(DateTime, default=_now)
        ...


Freezegun documentation : https://github.com/spulec/freezegun

