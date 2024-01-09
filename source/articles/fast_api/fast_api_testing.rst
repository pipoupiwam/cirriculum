Fast API & PyTest
===========================================

.. role:: bash(code)
  :language: bash
  :class: highlight

.. role:: python(code)
  :language: python
  :class: highlight


In this article we will setup a working :bash:`PyTest` environment for our :bash:`FastAPI AsyncIO` project.

Previous article : :doc:`fast_api`


The goal
~~~~~~~~~

To write our tests we will need :

- :bash:`SqlAlchemy` to create a database for each of our tests and rollback after the tests .
- **Isolate the database of each test**
- Make :bash:`PyTest` and :bash:`FastAPI` use the same database context.
- :bash:`Pytest Fixtures` to populate our database with test data

Full git repository : https://github.com/pipoupiwam/fastapi-blog


Python requirements
~~~~~~~~~~~~~~~~~~~~~

Install :bash:`pytest` and its requirements

:bash:`&> cat project/requirements.txt`

.. code-block:: bash

    ...
    # Testing
    pytest==7.4.4
    # Allows to write `async def` tests and fixtures
    pytest-asyncio==0.23.3
    # Httpx is an asyncio requests like library, used for testing purposes.
    httpx==0.26.0
    # aiosqlite is used as an SQLite driver for asyncio tests
    aiosqlite==0.19.0


Project Structure
~~~~~~~~~~~~~~~~~~
We added the following files to our project :

- :bash:`project/conftest.py`
    Contains our tests configuration and fixtures
- :bash:`project/app/tests/test_services.py`
    Contains all services.py tests
- :bash:`project/app/tests/test_main.py`
    Contains all main.py tests

.. code-block:: bash

    project/
        __init__.py
        app/
            database/
                db.py
                models.py
                services.py
            tests/
                fixtures.py
                test_main.py
            main.py
            schemas.py
        migrations/
        conftest.py
        alembic.ini
        requirements.txt



Configure our test database fixtures
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order to create a reusable Database Session for our tests suits we will use :bash:`pytest fixtures` and override the
app :python:`get_db` dependency.

Note :

- :bash:`Pytest` fixtures are executed **once per test**.
- A fixture return value is cached by pytest
- Fixtures **can be used by other fixtures**.

If a fixture is used multiple times in a single test : by the test itself and by another fixture, it will still **run
only once**.

This is important for our database setup, as we want :bash:`PyTest` and :bash:`FastAPI` to run on the same database instance

Pytest Fixtures documentation : https://docs.pytest.org/en/6.2.x/fixture.html

Create an async database engine
--------------------------------

*full conftest.py file is available below*

We create an `AsyncEngine` as in `project/database/db.py` but it will :

- :bash:`CREATE` all tables
- :bash:`Yield` the engine to be used by a test
- :bash:`DROP` all tables once a test finishes

:bash:`&> cat project/conftest.py`

.. code-block:: python

    DATABASE_URL = "sqlite+aiosqlite:///:memory:"

    @pytest_asyncio.fixture
    async def async_db_engine():
        """
        Generate an async database engine
        """
        async_engine = create_async_engine(
            DATABASE_URL, connect_args={"check_same_thread": False}, poolclass=StaticPool
        )
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        yield async_engine
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)

Create an async database session
--------------------------------

To create a database asynchronous session we will create another fixture to :

- creates an async_session
- Yield the session
- rollback the session

This session will be used by our **tests** and **FastAPI endpoints**

:bash:`&> cat project/conftest.py`

.. code-block:: python

    @pytest_asyncio.fixture
    async def async_db(async_db_engine):
        async_session = sessionmaker(
            expire_on_commit=False,
            autocommit=False,
            autoflush=False,
            bind=async_db_engine,
            class_=AsyncSession,
        )

        async with async_session() as session:
            await session.begin()
            yield session
            await session.rollback()

Note that :python:`async_db` uses the :python:`async_db_engin` fixture

Create an async client
-----------------------
Finally we will create an async client to communicate with our APIs.

We will use the :bash:`httpx` library, it has a similar syntax to :bash:`requests library` and fully support asynchronous
requests

httpx documentation : https://www.python-httpx.org/

To make our tests run on the same database as our tests we will override the :python:`get_db` dependency defined
in :bash:`project/app/main.py` with :python:`app.dependency_overrides[get_db] = lambda: async_db`

The :python:`lambda: async_db` is here to call the async_db fixture and :python:`yield session`

:bash:`&> cat project/conftest.py`

.. code-block:: python

    @pytest_asyncio.fixture
    async def async_client(async_db):
        """
        Note : Fixtures are executed only once per test, async_db won't yield two different databases if used two times.
        """
        app.dependency_overrides[get_db] = lambda: async_db
        async with AsyncClient(app=app, base_url="http://testserver") as client:
            yield client

Note that :python:`async_client` uses the :python:`async_db` fixture.


Full conftest.py
-----------------

.. code-block:: python

    import pytest_asyncio
    from httpx import AsyncClient
    from sqlalchemy import StaticPool
    from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

    from sqlalchemy.orm import sessionmaker
    from app.database.models import Base

    from app.main import app, get_db

    # in memory async sqlite
    DATABASE_URL = "sqlite+aiosqlite:///:memory:"


    @pytest_asyncio.fixture
    async def async_db_engine():
        """
        Generate an async database engine
        """
        async_engine = create_async_engine(
            DATABASE_URL, connect_args={"check_same_thread": False}, poolclass=StaticPool
        )
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        yield async_engine
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)

    @pytest_asyncio.fixture
    async def async_db(async_db_engine):
        async_session = sessionmaker(
            expire_on_commit=False,
            autocommit=False,
            autoflush=False,
            bind=async_db_engine,
            class_=AsyncSession,
        )

        async with async_session() as session:
            await session.begin()
            yield session
            await session.rollback()

    @pytest_asyncio.fixture
    async def async_client(async_db):
        """
        Note : Fixtures are executed only once per test, async_db won't yield two different databases if used two times.
        """
        app.dependency_overrides[get_db] = lambda: async_db
        async with AsyncClient(app=app, base_url="http://testserver") as client:
            yield client



Writing tests
~~~~~~~~~~~~~~~~

In order to spend less time writing tests and stay DRY we will create some reusable data for our tests.

fixtures
---------

:bash:`&> cat project/app/tests/fixtures.py`

.. code-block:: python

    import pytest_asyncio

    from app.database.services import AuthorService, ArticleService
    from conftest import async_db


    @pytest_asyncio.fixture
    async def with_blog_data(async_db):
        jean_author = await AuthorService.create_author(db=async_db, first_name="Jean", last_name="Bob")
        await ArticleService.create_article(db=async_db, author_id=jean_author.id, title="Article A", content="AAA")
        await ArticleService.create_article(db=async_db, author_id=jean_author.id, title="Article B", content="BBB")
        martin_author = await AuthorService.create_author(db=async_db, first_name="Martin", last_name="Luc")
        await ArticleService.create_article(db=async_db, author_id=martin_author.id, title="Article C", content="CCC")
        await ArticleService.create_article(db=async_db, author_id=martin_author.id, title="Article D", content="DDD")

We created two authors with two articles each.


Writing tests
---------------

Finally we can write tests to ensure everything works as expected !

Note the :python:`pytestmark = pytest.mark.asyncio` line. It lets pytest know that our tests are asyncio based and
must launched in an event loop and awaited. The same effect can also be achieved with a decorator :python:`@pytest.mark.asyncio`

:bash:`&> cat project/app/tests/test_main.py`

.. code-block:: python

    import pytest
    from fastapi import status

    from app.tests.fixtures import with_blog_data


    pytestmark = pytest.mark.asyncio


    async def test_get_author_404(async_client, with_blog_data):
        ret = await async_client.get("/authors/404")
        assert ret.status_code == status.HTTP_404_NOT_FOUND


    async def test_get_author(async_client, with_blog_data):
        ret = await async_client.get("/authors/1")
        assert ret.json()["id"] == 1
        assert ret.status_code == status.HTTP_200_OK


    async def test_create_author(async_client):
        ret = await async_client.post("/authors", json={
            "first_name": "create",
            "last_name": "author"
        })
        assert ret.json()["first_name"] == "create"
        assert ret.json()["last_name"] == "author"
        assert ret.status_code == status.HTTP_201_CREATED


    async def test_delete_author_404(async_client, with_blog_data):
        ret = await async_client.delete("/authors/256")
        assert ret.status_code == status.HTTP_404_NOT_FOUND


    async def test_delete_author(async_client, with_blog_data):
        ret = await async_client.delete("/authors/1")
        assert ret.status_code == status.HTTP_204_NO_CONTENT



Conclusions
---------------

We have setup a working asyncio pytest environment for our asyncio FastAPI project ! Congratulations !





