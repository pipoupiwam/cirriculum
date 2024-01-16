Using PyInstaller to package our FastAPI
===========================================

.. role:: bash(code)
  :language: bash
  :class: highlight


A simple way to deploy a micro-service is to create an executable. This way of packaging our code has several
advantages :

- No need to manage dependencies : Every dependency will
- Ease of deployment : A single executable to run
- Can be used for Serverless deployments : AWS lamda


PyInstaller
~~~~~~~~~~~~

To package our API we will use PyInstaller

PyInstaller documentation :  https://www.pyinstaller.org/en/stable/usage.html

Requirements
---------------------

Install :bash:`PyInstaller`

:bash:`pip install pyinstaller`


Entry point
------------------

The code of our application is located in :bash:`project/app/main.py`. While in development run our application using
:bash:`uvicorn app.main:app --reload`.

With :bash:`PyInstaller` we cannot simply generate an executable from this file, it will mess with :bash:`Python imports`,
we need to create an entrypoint in the root folder of our project :


:bash:`&> cat project/pyinstaller_entrypoint.txt`

.. code-block:: python

    import uvicorn

    from app.main import app

    """
    This file is used by pyinstaller to build the distributable binary file.
    It is at the project root folder to make sure that imports work properly.
    """

    def serve():
        """Serve the web application."""
        uvicorn.run(app, port=8000)  # or whatever port number you want.


    if __name__ == "__main__":
        serve()

This file launch the application from the root folder to ensure all our import statements work correctly.

Executable
------------

Let's create a single file executable from our entrypoint :

:bash:`pyinstaller pyinstaller_entrypoint.py --name api --hidden-import=asyncpg.pgproto.pgproto --onefile`

Note the :bash:`--hidden-import=asyncpg.pgproto.pgproto`, this is related to :bash:`SqlAlchemy` which imports are
not detected by :bash:`PyInstaller`, without the hidden import our executable would fail.


Conclusion
------------
It is very easy to create a self containing python executable, we can distribute and deploy our project easily without
worrying for dependencies management.



