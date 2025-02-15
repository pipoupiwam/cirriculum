Task run Once
=============================

Scenario
~~~~~~~~~~

On an e-commerce website, a task runs periodically to synchronize its database with suppliers inventory.

To ensure the inventory is up to date, the task **runs every 5 minutes**.

Several issues may arise that could lead to **execution overlap** and **concurrent updates**:

- Suppliers platform slowdowns or technical issues.
- Inventory size growth: A significant number of products may have been added over time.
- Resource limitations: Increased traffic can lead to performance degradation and execution slowdown.

Once execution overlap occurs, other issues may emerge:

- **Queue size growth** (if a single worker executes these tasks).
- **Performance degradation**: Inventory updates can be resource-intensive. Multiple instances running simultaneously may degrade performance.
- **Data integrity**: Multiple workers updating the same inventory with potentially outdated data.
- **Database locking**: The codebase may contain locking mechanisms that could be triggered by the updating inventory task, resulting in a blocked database.

Solution
~~~~~~~~~~~

To avoid these issues, we could introduce a simple **"locking mechanism"** for this task to ensure that only a single instance runs at any given time.

.. code-block:: Python

    from functools import wraps
    from django.core.cache import cache

    def run_once(task_name, timeout):
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                # Check if the task is already in the cache
                if cache.get(task_name):
                    print(f"Task '{task_name}' is already running. Exiting.")
                    return

                # Add the task to the cache with a timeout
                cache.set(task_name, 'locked', timeout)

                try:
                    # Execute the function
                    result = func(*args, **kwargs)
                finally:
                    # Remove the task from the cache
                    cache.delete(task_name)

                return result

            return wrapper
        return decorator

    @run_once(task_name='example_task', timeout=60*5)
    def example_function():
        print("Long execution .... ")



This simple decorator ensures that only a single task is executed at a time.
I would suggest to implement a logging or monitoring mechanism to analyze the execution time of such tasks to prevent overlap and performance issues.