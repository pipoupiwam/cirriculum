Scheduling RQ tasks with RQ scheduler
==========================================

.. role:: b(code)


:b:`RqScheduler` is a lightweight alternative to :b:`Celery-beat`, it does only one thing : **Schedule recurring jobs**

RqScheduler documentation : https://github.com/rq/rq-scheduler

The RqScheduler daemon will tik every second and add jobs that require to be executed to the RQ job queue :

:b:`python manage.py rqscheduler --interval 1`

But contrary to :b:`celery-beat`, where we define the jobs and intervals in a dictionary, :b:`RqScheduler` jobs need
to be scheduled programmatically at application startup.

We could schedule our jobs in a Django Application :b:`AppConfig` file, such as :

:b:`&> cat project/apps/my_app/apps.py`

.. code-block:: python

    class MyAppConfig(AppConfig):
        default_auto_field = "django.db.models.BigAutoField"
        name = "project.apps.myapp"

        def ready(self):
            scheduler.schedule(
                scheduled_time=timezone.now(),
                func=my_job,
                interval=60,
                repeat=None,
            )

This could work in development, but it will create problems in production.
Several django instances will be running inside :b:`uwsgi/gunicorn` workers and schedule the tasks multiple times

There is an elegant and easy solution to ensure jobs are scheduled in a single entrypoint : **override** :b:`RqScheduler`
**django command and schedule our jobs there.**


:b:`&> cat project/apps/my_app/management/commands/rqscheduler.py`

.. code-block:: python

    import django_rq
    from django.utils import timezone
    from django_rq.management.commands import rqscheduler

    scheduler = django_rq.get_scheduler("default")  # use the default queue of Django-RQ

    def clear_scheduled_jobs():
        # Delete any existing jobs in the scheduler when the app starts up
        for job in scheduler.get_jobs():
            log.debug("Deleting scheduled job %s", job)
            job.delete()


    def register_scheduled_jobs():
        # do your scheduling here
        scheduler.schedule(
            scheduled_time=timezone.now(),
            func=my_job,
            interval=60,
            repeat=None,
        )


    class Command(rqscheduler.Command):
        """
        Source : https://github.com/rq/rq-scheduler/issues/51#issuecomment-362352497
        """

        help = "Run RqScheduler and schedule jobs"

        def handle(self, *args, **kwargs):
            # This is necessary to prevent duplicates
            clear_scheduled_jobs()
            register_scheduled_jobs()
            super().handle(*args, **kwargs)


Conclusion
----------------------

With this approach we will run the scheduler and automatically schedule all required jobs !
