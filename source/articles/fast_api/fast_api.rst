Asyncio Fast API & AsyncPG with SqlAlchemy
===========================================

.. role:: bash(code)
  :language: bash
  :class: highlight

.. role:: python(code)
  :language: python
  :class: highlight


The last two years, I focused on learning and practicing :bash:`Python AsyncIO` development. I find AsyncIO very attractive
in terms of performance, especially for web applications where request processing spends most of its time waiting
for a database or an API call to return results.

Most of my Asyncio experience is based on pure Python for real time processing tasks combined with :bash:`Django` for web
interfaces. :bash:`Django ORM` is not ( yet ) fully asynchronous compatible, some complex queries need to be wrapped
in an :bash:`sync_to_async` decorator.

:bash:`FastAPI` micro-framework combined with :bash:`SqlAlchemy` seems to bee a good **fully AsyncIo compatible environment**, let's
build some APIs with it and explore it's possibilities.


The goal
~~~~~~~~~

Setup a working FastApi AsyncIO environment for a basic blog application with :

- :bash:`SqlAlchemy` as ORM with async sessions.
- :bash:`Alembic` to manage database migrations
- :bash:`FastAPI` Asynchronous API endpoints
- :bash:`Pytest` with AsyncIo for testing


Full git repository : https://github.com/pipoupiwam/fastapi-blog


Python requirements
~~~~~~~~~~~~~~~~~~~~~

Install the following requirements in a :bash:`virtualenv`

:bash:`&> cat project/requirements.txt`

.. code-block:: bash

    # Main APP
    # FastAPI framework
    fastapi==0.108.0
    # ORM
    SQLAlchemy==2.0.25
    # Replacement for psycopg2 to use asyncio with postgres.
    asyncpg==0.29.0
    # Database migrations
    alembic==1.13.1


Project Structure
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    project/
        __init__.py
        app/
            database/
                db.py
                models.py
                services.py
            main.py
            schemas.py
        migrations/
            env.py
            script.py.mako
        alembic.ini
        requirements.txt


Database Setup
~~~~~~~~~~~~~~~~~~~~~

The database related code will be under `app/database`.


Create the database
---------------------

First of all we need to create a database for our project. In my case I created a database using :bash:`psql`

.. code-block:: bash

    &> sudo su postgres
    &> psql
    &> CREATE DATABASE my_project_db;
    DATABASE CREATED

Models
-------

We will use SqlAlchemy for our ORM : https://docs.sqlalchemy.org/en/20/

We will use :python:`AsyncSession` with the `postgresql+asyncpg` driver.


:bash:`&> cat project/app/database/db.py`

.. code-block:: python

    from sqlalchemy import create_engine
    from sqlalchemy.ext.asyncio import AsyncEngine, AsyncSession

    from sqlalchemy.orm import sessionmaker


    DATABASE_URL = "postgresql+asyncpg://postgres:password@localhost:5432/project_db"

    engine = AsyncEngine(create_engine(DATABASE_URL, echo=True, future=True))



Next we need to create a function to get a Session in order to query the database

:bash:`&> cat project/app/main.py`

.. code-block:: python

    from fastapi FastAPI
    from sqlalchemy.ext.asyncio import AsyncSession
    from sqlalchemy.orm import sessionmaker
    from .database.db import engine

    app = FastAPI()

    async def get_db() -> AsyncSession:
        async_session = sessionmaker(
            engine, class_=AsyncSession, expire_on_commit=False
        )
        async with async_session() as session:
            yield session

This function could have been declared in `db.py` but declaring it in the API makes it easier to implement testing
fixtures.


Migrations
-----------

:bash:`Alembic` will help us manage our database migrations.
Alembic documentation : https://alembic.sqlalchemy.org/en/latest/tutorial.html

We must start by initializing alembic configuration for our project.

.. code-block:: bash

    &> alembic init alembic

This command will generate the following files :

.. code-block:: bash

    migrations/
        versions/
            .empty
        env.py
        script.py.mako
    alembic.ini

To make things work we need to edit `alembic.ini` to specify to which database we will connect :

:bash:`&> cat project/alembic.ini`

.. code-block:: bash

    sqlalchemy.url = postgresql+asyncpg://postgres:password@localhost:5432/project_db

Then we need to inform :bash:`alembic` about the existence of our database models.


:bash:`&> cat project/alembic.ini`

.. code-block:: bash

    from app.database.models import Base
    target_metadata = Base.metadata

The next step is to generate the initial migrations for our models

:bash:`&> alembic revision --autogenerate -m "create_author_article"`

This command will generate a migration file in :bash:`project/versions`

Finally we can apply the generated migration in order to create the `Author` and `Article` tables in database.

:bash:`&> alembic upgrade head`



CRUD operations
----------------

We will extract the "business" logic of our application into dedicated Services. This allows us to create reusable and
easily testable functions.

The API layer will be responsible for all the permissions, authorization logic and will use our services to implement
the business logic.

Designing our code this way allows us to test our services in a true unitary manner.

:bash:`&> cat project/app/database/services.py`

.. code-block:: python

    from fastapi import HTTPException
    from sqlalchemy import select
    from sqlalchemy.ext.asyncio import AsyncSession
    from . import models


    class ArticleService:
        """
        Service class for the Article model.
        You should implement Article related methods in this class.
        """

        @staticmethod
        async def list_articles(*, db: AsyncSession):
            result = await db.execute(select(models.Article))
            articles = result.scalars().all()
            return articles

        @staticmethod
        async def get_article(*, db: AsyncSession, article_id):
            instance = await db.get(models.Article, article_id)
            if instance is None:
                raise HTTPException(status_code=404, detail="Article does not exist")
            return instance

        @staticmethod
        async def create_article(*, db: AsyncSession, title, content, author_id):
            await AuthorService.get_author(db=db, author_id=author_id)
            article_instance = models.Article(title=title, content=content, author_id=author_id)  # type: ignore[call-arg]
            db.add(article_instance)
            await db.commit()
            await db.refresh(article_instance)
            return article_instance

        @staticmethod
        async def delete_article(*, db: AsyncSession, article_id):
            instance = await ArticleService.get_article(db=db, article_id=article_id)
            logger.info(f"Deleting Article : {article_id}")
            await db.delete(instance)
            await db.commit()
            return instance

    class AuthorService:
        """
        Service class for the Author model.
        You should implement Author related methods in this class
        """
        @staticmethod
        async def get_author(*, db: AsyncSession, author_id):
            instance = await db.get(models.Author, author_id)
            if instance is None:
                raise HTTPException(status_code=404, detail="Author does not exist")
            return instance

        @staticmethod
        async def list_authors(*, db: AsyncSession):
            result = await db.execute(select(models.Author))
            authors = result.scalars().all()
            return authors

        @staticmethod
        async def create_author(*, db: AsyncSession, first_name, last_name):
            author_instance = models.Author(first_name=first_name, last_name=last_name)  # type: ignore[call-arg]
            db.add(author_instance)
            await db.commit()
            await db.refresh(author_instance)
            return author_instance

        @staticmethod
        async def delete_author(*, db: AsyncSession, author_id):
            instance = await AuthorService.get_author(db=db, author_id=author_id)
            await db.delete(instance)
            await db.commit()
            return instance


These services may be extended later to implement some more complex features.



Pydantic schemas
~~~~~~~~~~~~~~~~~~~~~

In order to ease the serialization of our database models we will use :bash:`pydantic`.

Pydantic documentation : https://docs.pydantic.dev/latest/concepts/models/

This library will allow us automatically serialize our :bash:`SqlAlchemy` into :bash:`JSON` and vice-versa.

Another benefit is the automatically generated :bash:`OpenAPI` schema which provides us with a :bash:`Swagger`
testable documentation.

:bash:`&> cat project/appschemas.py`

.. code-block:: python

    from datetime import datetime
    from pydantic import BaseModel

    # Article Model

    class ArticleBase(BaseModel):
        title: str
        content: str
        author_id: int


    class Article(ArticleBase):
        """
        Database model for Article table
        """
        id: int

        class Config:
            orm_mode = True


    # Author Model
    class AuthorBase(BaseModel):
        first_name: str
        last_name: str


    class Author(AuthorBase):
        """
        Database model for Author table
        """
        id: int
        created_at: datetime
        updated_at: datetime


        class Config:
            orm_mode = True


:python:`ArticleBase` Schema define all writable elements of our model, it is **not mapped** to our SqlAlchemy Article model
( :bash:`orm_mode = True` is absent ). Also it does not implement the :bash:`created_at` and :bash:`updated_at` fields as we do not want to
expose these fields to the writable APIs.

The :bash:`Article` model inherits :python:`ArticleBase` and specifies that **it is** an SqlAlchemy mapped model with  :bash:`orm_mode = True`

This mechanism allows us to reproduce the DjangoRestFramework :bash:`read_only=True/False` system.

The same logic applies to the :bash:`Author` models.


APIs
~~~~~

Finally we can implement the APIs

:bash:`&> cat project/app/main.py`


.. code-block:: python

    from fastapi import Depends, FastAPI, status
    from sqlalchemy.ext.asyncio import AsyncSession
    from sqlalchemy.orm import sessionmaker

    from . import schemas
    from .database.db import engine
    from .database.services import AuthorService, ArticleService

    app = FastAPI()

    async def get_db() -> AsyncSession:
        async_session = sessionmaker(
            engine, class_=AsyncSession, expire_on_commit=False
        )
        async with async_session() as session:
            yield session


    # Authors
    @app.get("/authors", response_model=list[schemas.Author], status_code=status.HTTP_200_OK)
    async def list_authors(db: AsyncSession = Depends(get_db)):
        """
        List authors
        """
        authors = await AuthorService.list_authors(db=db)
        return authors

    @app.get("/authors/{author_id}", response_model=schemas.Author, status_code=status.HTTP_200_OK)
    async def delete_author(author_id: int,  db: AsyncSession = Depends(get_db)):
        author = await AuthorService.get_author(db=db, author_id=author_id)
        return author

    @app.post("/authors", response_model=schemas.Author, status_code=status.HTTP_201_CREATED)
    async def create_author(author: schemas.AuthorBase, db: AsyncSession = Depends(get_db)):
        """
        Create an Author
        """
        author_instance = await AuthorService.create_author(
            db=db,
            first_name=author.first_name,
            last_name=author.last_name
        )
        return author_instance

    @app.delete("/authors/{author_id}", status_code=status.HTTP_204_NO_CONTENT)
    async def delete_author(author_id: int,  db: AsyncSession = Depends(get_db)):
        await AuthorService.delete_author(db=db, author_id=author_id)


    # Articles
    @app.get("/articles", response_model=list[schemas.Article], status_code=status.HTTP_200_OK)
    async def list_articles(db: AsyncSession = Depends(get_db)):
        """
        List Articles
        """
        articles = await ArticleService.list_articles(db=db)
        return articles

    @app.get("/articles/{article_id}", response_model=schemas.Article, status_code=status.HTTP_200_OK)
    async def get_author(article_id: int,  db: AsyncSession = Depends(get_db)):
        author = await ArticleService.get_article(db=db, article_id=article_id)
        return author

    @app.post("/articles", response_model=schemas.Article, status_code=status.HTTP_201_CREATED)
    async def create_article(article: schemas.ArticleBase, db: AsyncSession = Depends(get_db)):
        """
        Create an article
        """
        article_instance = await ArticleService.create_article(
            db=db, title=article.title,
            content=article.title,
            author_id=article.author_id
        )
        return article_instance

    @app.delete("/articles/{article_id}", status_code=status.HTTP_204_NO_CONTENT)
    async def delete_article(article_id: int,  db: AsyncSession = Depends(get_db)):
        await ArticleService.delete_article(db=db, article_id=article_id)



Now you should be able to run the API and visit http://localhost:8000/docs

:bash:`&> uvicorn app.main:app --reload`



Note that each api view is decorated with :bash:`@app.method` and provide information about :

- The HTTP method :python:`@app.get` of the endpoint
- The route and url parameters :python:`@app.get("/articles/{article_id}")`
- The response Model :python:`response_model=schemas.Article` used for serialization
- The HTTP status_code :python:`status_code=status.HTTP_200_OK`

This information will be used by FastAPI to generate the OpenAPI schema, validate and serialize input and output JSON
data



Customizing the API documentation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Swagger customisation is located in a separate article

Read :doc:`fast_api_swagger`


Testing with Pytest
~~~~~~~~~~~~~~~~~~~~~

The test part of this project is located in a separate article.

Read :doc:`fast_api_testing`




Conclusions
~~~~~~~~~~~~

We implemented a basic API writing and reading a database, with schema migrations and data serialization.

FastAPI is a good way to develop Asynchronous APIs for micro services.

