
Django Settings organization
======================================

.. role:: bash(code)
  :language: bash
  :class: highlight

.. role:: python(code)
  :language: python
  :class: highlight

Here is the way I like to organize a Django project settings.


My main goal is to **separate each relevant app settings into dedicated configuration files**. This eases
the **readability and maintenance of settings**.

Another benefit is the enhanced comprehension of what settings
changed during a code review process.

Settings folder structure
*******************

.. code-block:: bash

    project/project/
        __init__.py
        env.py
        local.py
        production.py

        settings/
            base/
                __init__.py
                django.py
                log.py
                third_party.py

            __init__.py



Environment file configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To use :bash:`django-environ .env` environment ,
you need to implement the files below to ensures that :bash:`.env` file is read before the settings files.


:bash:`&> cat project/env.py`

.. code-block:: python

    import environ

    env = environ.Env()


:bash:`&> cat project/settings/__init__.py`

.. code-block:: python

    from project.env import env, environ

    # It needs to be there to ensure the env file is read first
    env.read_env(str((environ.Path(__file__) - 3).path(".env")))



Project settings
~~~~~~~~~~~~~~~~~


:bash:`&> cat project/base/django.py`

.. code-block:: python

    from project.env import env

    DEBUG = True
    SERVER_NAME = env("SERVER_NAME")
    # internal
    INSTALLED_APPS += [
        "my_project.apps.core",
        ...
    ]
    ...


:bash:`django.py` contains all settings relevant to the Django configuration of the framework.
Note the :python:`from project.env import env`



:bash:`&> cat project/base/log.py`

.. code-block:: python

    logging.config.dictConfig(
    {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
    ...


:bash:`log.py` contains the logging configuration, custom logger classes etc...

:bash:`&> cat project/base/third_party.py`

.. code-block:: python

    THIRD_PARTY_PARAMETER = True


:bash:`third_party.py` contains the configuration of a third party application. The file must be named
after the third party app, E.g. :bash:`celery.py` if it is celery.
**Create on file per third party application**.



:bash:`&> cat project/base/__init__.py`

.. code-block:: python

    from .django import *  # noqa: F403 F401
    from .django_rq import *  # noqa: F403 F401
    from .log import *  # noqa: F403 F401

This file imports all settings defined in the folder.


Local & Production settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Based on the settings structure described above, we can easily import all settings with a single line :python:`from .base import *`

:bash:`&> cat project/local.py`

.. code-block:: python

    from .base import *  # noqa: F403

    DEBUG = True
    # dev tools
    INSTALLED_APPS += [
        "development_only_app",
        ...
    ]

Note that we imported everything from :bash:`.base`, this means we imported everything defined in :bash:`base/__init__.py`

:bash:`&> cat project/production.py`

.. code-block:: python

    from .base import *  # noqa: F403

    DEBUG = False
    # prudction apps
    INSTALLED_APPS += [
        "sentry",
        "production_only_app",
        ...
    ]

