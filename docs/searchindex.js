Search.setIndex({"docnames": ["articles/devops/cloud_init", "articles/devops/drone_ci", "articles/devops/index", "articles/devops/packer_aws_ami", "articles/devops/terraform", "articles/devops/terraform_autoscaler", "articles/devops/terraform_install", "articles/devops/terraform_instance_route_53", "articles/devops/terraform_workspace", "articles/fast_api/fast_api", "articles/fast_api/fast_api_executable", "articles/fast_api/fast_api_swagger", "articles/fast_api/fast_api_testing", "articles/fast_api/index", "articles/fast_api/sqlalchemy_freezegun", "articles/management/index", "articles/management/lean_product_features", "articles/management/process_bottlenecks", "articles/management/standup", "articles/python_django/asyncio_decorators", "articles/python_django/django_settings", "articles/python_django/django_table_lock", "articles/python_django/django_websockets", "articles/python_django/index", "articles/python_django/matrices", "articles/python_django/n_plus_one", "articles/python_django/rq_scheduler", "articles/python_django/task_run_once", "index", "resume"], "filenames": ["articles/devops/cloud_init.rst", "articles/devops/drone_ci.rst", "articles/devops/index.rst", "articles/devops/packer_aws_ami.rst", "articles/devops/terraform.rst", "articles/devops/terraform_autoscaler.rst", "articles/devops/terraform_install.rst", "articles/devops/terraform_instance_route_53.rst", "articles/devops/terraform_workspace.rst", "articles/fast_api/fast_api.rst", "articles/fast_api/fast_api_executable.rst", "articles/fast_api/fast_api_swagger.rst", "articles/fast_api/fast_api_testing.rst", "articles/fast_api/index.rst", "articles/fast_api/sqlalchemy_freezegun.rst", "articles/management/index.rst", "articles/management/lean_product_features.rst", "articles/management/process_bottlenecks.rst", "articles/management/standup.rst", "articles/python_django/asyncio_decorators.rst", "articles/python_django/django_settings.rst", "articles/python_django/django_table_lock.rst", "articles/python_django/django_websockets.rst", "articles/python_django/index.rst", "articles/python_django/matrices.rst", "articles/python_django/n_plus_one.rst", "articles/python_django/rq_scheduler.rst", "articles/python_django/task_run_once.rst", "index.rst", "resume.rst"], "titles": ["Cloud Init &amp; Terraform", "Drone CI", "DevOps", "Create an AWS ami with Packer", "Terraform", "Terraform autoscaler architecture", "Terraform &amp; AWS-CLI installation", "Create DNS record with terraform", "Terraform Workspaces", "Asyncio Fast API &amp; AsyncPG with SqlAlchemy", "Using PyInstaller to package our FastAPI", "Customize Fast API swagger documentation", "Fast API &amp; PyTest", "Fast API", "Make Freezegun work with SqlAlchemy", "Management", "Lean product features", "Identify and Solve organizational bottlenecks", "When to standup ?", "Decorators for Asyncio", "Django Settings organization", "How to lock a table in Django", "Django websockets", "Python / Django", "Matrices", "N + 1 Queries in Django ORM", "Scheduling RQ tasks with RQ scheduler", "Task run Once", "Mikhail Zaitsev", "Resume"], "terms": {"how": [0, 19, 24, 28, 29], "us": [0, 4, 6, 7, 9, 12, 13, 14, 20, 22, 24, 26, 27], "provis": 0, "environ": [0, 4, 6, 9, 12, 13, 23], "articl": [2, 4, 9, 12, 15, 23], "about": [2, 4, 9, 15, 23, 24], "terraform": [2, 28, 29], "cloud": [2, 3, 28, 29], "init": [2, 9], "drone": [2, 28, 29], "ci": [2, 28, 29], "infrastructur": [2, 3, 6, 24, 28, 29], "code": [2, 3, 9, 10, 20, 24, 27, 28, 29], "setup": [6, 12, 13, 28, 29], "team": 15, "organ": [4, 15, 18, 23, 28, 29], "product": [4, 15, 17, 18, 23, 26], "when": [14, 15, 24, 26], "standup": [15, 28, 29], "issu": [4, 18, 24, 26], "i": [4, 6, 7, 9, 10, 12, 14, 18, 20, 22, 24, 26, 28, 29], "encount": [6, 18], "while": [10, 18, 24], "meet": [18, 28, 29], "too": 18, "earli": 18, "morn": 18, "some": [9, 12, 18], "peopl": 18, "mai": [9, 18], "late": 18, "difficult": 18, "work": [6, 9, 10, 12, 13, 18, 24, 26, 28, 29], "from": [4, 9, 10, 12, 18, 20, 24, 26, 27, 28, 29], "differ": [12, 18, 24], "tinezon": 18, "after": [4, 12, 18, 20], "lunch": 18, "break": 18, "ar": [4, 10, 12, 14, 18, 24, 26], "thei": [4, 18], "come": 18, "back": [4, 18], "finish": [12, 18], "discuss": 18, "still": [4, 12, 18], "mind": 18, "digest": 18, "ha": [10, 12, 18], "its": [9, 12, 18, 24, 28, 29], "effect": [12, 18], "afternoon": 18, "thi": [4, 9, 10, 12, 14, 18, 20, 24, 26, 28, 29], "gener": [6, 9, 10, 12, 14, 18, 24, 28, 29], "part": [9, 18], "dai": 18, "less": [12, 18], "interupt": 18, "best": [7, 18], "prodctiv": 18, "start": [4, 6, 9, 18, 26], "15": 18, "minut": 18, "befor": [18, 20], "here": [12, 20, 26], "wai": [9, 10, 20], "like": [12, 20, 28, 29], "my": [4, 7, 9, 20, 28, 29], "main": [4, 9, 10, 12, 20], "goal": [13, 17, 20, 28, 29], "separ": [9, 20, 24], "each": [4, 9, 12, 20, 24, 28, 29], "relev": 20, "app": [4, 9, 10, 12, 20, 22, 26], "dedic": [9, 20, 28, 29], "eas": [9, 10, 20, 28, 29], "readabl": 20, "mainten": [20, 28, 29], "anoth": [9, 12, 20], "benefit": [4, 9, 20], "enhanc": [4, 20, 24, 28, 29], "comprehens": 20, "what": [16, 20], "chang": [4, 20, 24], "dure": [14, 20, 24], "review": [4, 20, 28, 29], "process": [4, 9, 17, 20, 24, 28, 29], "__init__": [9, 12, 20], "py": [9, 10, 20, 24, 26], "env": [9, 20], "base": [9, 12, 14, 20, 28, 29], "log": [20, 26, 28, 29], "third_parti": 20, "To": [4, 6, 9, 10, 12, 20, 24], "you": [4, 6, 9, 10, 14, 20, 24], "need": [4, 6, 9, 10, 12, 16, 20, 24, 26, 28, 29], "implement": [9, 20], "below": [12, 20], "ensur": [10, 12, 20, 26, 28, 29], "read": [4, 9, 20, 22, 24], "cat": [4, 9, 10, 12, 20, 24, 26], "import": [9, 10, 12, 20, 24, 26], "It": [4, 10, 12, 20, 24], "first": [4, 9, 20, 24], "read_env": 20, "str": [9, 20], "path": 20, "__file__": 20, "3": [12, 20, 24], "debug": [20, 26], "true": [4, 9, 20], "server_nam": 20, "intern": [17, 20, 28, 29], "installed_app": 20, "my_project": 20, "core": 20, "contain": [4, 6, 10, 12, 20, 24], "all": [4, 9, 10, 12, 20, 24, 26], "framework": [4, 9, 20, 28, 29], "note": [9, 10, 12, 20], "config": [9, 20], "dictconfig": 20, "version": [3, 4, 6, 9, 20], "1": [3, 4, 9, 12, 20, 24, 26], "disable_existing_logg": 20, "fals": [4, 9, 12, 20], "formatt": 20, "custom": [4, 13, 20, 24, 28, 29], "logger": [9, 20], "class": [9, 14, 20, 24, 26], "etc": [4, 20], "third_party_paramet": 20, "third": [7, 20], "parti": [7, 20], "applic": [9, 10, 20, 22, 24, 26, 28, 29], "The": [3, 4, 10, 13, 17, 20, 22, 24, 26, 28, 29], "must": [9, 12, 20], "name": [4, 10, 20, 26], "e": [4, 20, 28, 29], "g": [4, 20, 28, 29], "celeri": [20, 26, 28, 29], "creat": [2, 4, 10, 19, 20, 24, 26], "per": [12, 20], "noqa": 20, "f403": 20, "f401": 20, "django_rq": [20, 26], "defin": [4, 9, 12, 20, 26], "describ": [4, 20], "abov": 20, "we": [4, 6, 9, 10, 12, 20, 24, 26, 28, 29], "can": [4, 6, 9, 10, 12, 14, 20, 24], "easili": [4, 6, 9, 10, 20, 24], "singl": [4, 10, 12, 20, 24, 26, 28, 29], "line": [12, 20, 24], "dev": [9, 20], "tool": [20, 28, 29], "development_only_app": 20, "everyth": [12, 20], "mean": [20, 24], "prudction": 20, "sentri": 20, "production_only_app": 20, "without": [10, 23, 24, 27], "matric": 23, "set": [4, 23], "folder": [4, 6, 10, 23], "structur": [13, 23], "store": [4, 22, 24, 28, 29], "manipul": [], "larg": 24, "within": 4, "django": [9, 13, 24, 26, 28, 29], "As": [2, 28, 29], "highli": [28, 29], "softwar": [4, 28, 29], "engin": [4, 9, 28, 29], "extens": [28, 29], "devop": [28, 29], "amazon": [6, 28, 29], "web": [4, 6, 9, 10, 22, 28, 29], "servic": [4, 6, 9, 10, 12, 28, 29], "am": [28, 29], "deliv": [28, 29], "innov": [28, 29], "solut": [4, 26, 28, 29], "leverag": [28, 29], "expertis": [28, 29], "With": [10, 26, 28, 29], "proven": [28, 29], "track": [24, 28, 29], "record": [4, 28, 29], "sever": [4, 10, 24, 26, 28, 29], "year": [9, 28, 29], "abl": [9, 28, 29], "collabor": [28, 29], "stakehold": [28, 29], "analyz": [28, 29], "requir": [3, 4, 13, 26, 28, 29], "design": [9, 22, 23, 28, 29], "scalabl": [28, 29], "effici": [24, 28, 29], "asyncio": [12, 13, 27, 28, 29], "request": [9, 12, 21, 24, 28, 29], "websocket": [23, 28, 29], "numpi": [24, 28, 29], "redi": [22, 24, 28, 29], "pytest": [13, 28, 29], "rest": [28, 29], "rqueu": [28, 29], "cach": [12, 24, 28, 29], "postgr": [4, 9, 24, 28, 29], "databas": [13, 21, 22, 24, 28, 29], "model": [12, 14, 21, 24, 26, 28, 29], "perform": [4, 9, 28, 29], "monitor": [28, 29], "timeseri": [28, 29], "stream": [28, 29], "pub": [28, 29], "sub": [28, 29], "optim": [24, 28, 29], "data": [4, 9, 12, 22, 24, 28, 29], "ec2": [3, 4, 28, 29], "rd": [4, 28, 29], "s3": [28, 29], "autosc": [4, 28, 29], "iam": [28, 29], "secur": [28, 29], "group": [28, 29], "boto": [28, 29], "api": [6, 10, 14, 24, 28, 29], "server": [4, 24, 28, 29], "nginx": [28, 29], "gunicorn": [26, 28, 29], "supervisor": [28, 29], "systemctl": [28, 29], "cron": [28, 29], "packer": [2, 4, 28, 29], "ami": [2, 28, 29], "docker": [28, 29], "imag": [3, 28, 29], "creation": [4, 28, 29], "cd": [28, 29], "test": [4, 13, 14, 21, 28, 29], "autom": [4, 28, 29], "pipelin": [28, 29], "javascript": [28, 29], "html": [4, 6, 9, 10, 12, 28, 29], "css": [28, 29], "jinja": [28, 29], "templat": [28, 29], "git": [4, 9, 12, 28, 29], "interact": [28, 29], "rebas": [28, 29], "retrospect": [28, 29], "analysi": [28, 29], "concept": [9, 28, 29], "technic": [28, 29], "specif": [28, 29], "recruit": [28, 29], "sinc": [28, 29], "graduat": [28, 29], "had": [22, 24, 28, 29], "opportun": [28, 29], "compani": [17, 28, 29], "autonom": [22, 28, 29], "vehicl": [22, 28, 29], "spinup": [28, 29], "focus": [9, 28, 29], "integr": [28, 29], "drt": [28, 29], "system": [4, 6, 9, 24, 28, 29], "where": [9, 26, 28, 29], "would": [10, 24, 28, 29], "virtual": [28, 29], "driver": [9, 12, 28, 29], "give": [24, 28, 29], "order": [4, 9, 12, 24, 28, 29], "go": [3, 28, 29], "locat": [3, 9, 10, 28, 29], "open": [4, 28, 29], "door": [28, 29], "progress": [28, 29], "role": [28, 29], "wa": [4, 24, 28, 29], "scratch": [28, 29], "architectur": [3, 28, 29], "mvp": [28, 29], "small": [4, 28, 29], "pursu": [28, 29], "technologi": [28, 29], "aw": [2, 4, 10, 28, 29], "asynchron": [9, 12, 28, 29], "task": [9, 23, 28, 29], "real": [9, 22, 24, 28, 29], "time": [9, 12, 14, 17, 22, 24, 26, 28, 29], "ingest": [28, 29], "provid": [4, 9, 28, 29], "demand": [28, 29], "respons": [9, 22, 28, 29], "transport": [28, 29], "suit": [4, 12, 28, 29], "oper": [17, 28, 29], "charg": [28, 29], "compos": [4, 28, 29], "8": [24, 28, 29], "backoffic": [28, 29], "reduc": [24, 28, 29], "margin": [24, 28, 29], "cost": [28, 29], "new": [4, 23, 28, 29], "client": [16, 28, 29], "qualiti": [28, 29], "gate": [28, 29], "simul": [28, 29], "launch": [10, 12, 28, 29], "territori": [28, 29], "wide": [6, 28, 29], "full": [9, 28, 29], "refactor": [28, 29], "geographi": [28, 29], "re": [28, 29], "stabil": [28, 29], "make": [4, 6, 9, 10, 12, 13, 24, 28, 29], "predict": [28, 29], "add": [4, 6, 9, 24, 26, 28, 29], "featur": [9, 28, 29], "travel": [28, 29], "deploy": [3, 10, 28, 29], "elk": [28, 29], "elasticsearch": [28, 29], "logstash": [28, 29], "kibana": [28, 29], "central": [3, 4, 28, 29], "platform": [17, 28, 29], "previous": [4, 28, 29], "own": [4, 28, 29], "significantli": [28, 29], "run": [4, 6, 9, 10, 12, 26, 28, 29], "migrat": [4, 12, 28, 29], "python2": [28, 29], "python3": [28, 29], "postgi": [28, 29], "osrm": [28, 29], "etl": [28, 29], "an": [2, 4, 9, 10, 24, 26, 28, 29], "edg": [28, 29], "iot": [28, 29], "profession": [28, 29], "fleet": [28, 29], "extract": [9, 28, 29], "transform": [24, 28, 29], "load": [24, 28, 29], "azur": [4, 28, 29], "postgresql": [9, 28, 29], "timescaledb": [28, 29], "modul": [4, 7, 28, 29], "consum": [28, 29], "document": [3, 10, 12, 13, 14, 24, 26, 28, 29], "swagger": [9, 13, 28, 29], "mqtt": [28, 29], "french": [28, 29], "compat": [4, 6, 9, 28, 29], "supervis": [28, 29], "machin": [28, 29], "lifecycl": [28, 29], "allow": [4, 6, 9, 12, 14, 24, 28, 29], "musician": [28, 29], "simultan": [28, 29], "music": [28, 29], "workflow": [28, 29], "frontend": [28, 29], "interfac": [4, 9, 22, 28, 29], "window": [28, 29], "maco": [28, 29], "synchron": [28, 29], "file": [4, 9, 10, 12, 23, 24, 26, 28, 29], "sampl": [28, 29], "between": [28, 29], "pyqt": [28, 29], "em": [28, 29], "lyon": [28, 29], "busi": [9, 24, 28, 29], "2009": [28, 29], "2014": [28, 29], "epitech": [28, 29], "2012": [28, 29], "2013": [28, 29], "beinj": [28, 29], "jiaotong": [28, 29], "fluent": [28, 29], "russian": [28, 29], "profici": [28, 29], "english": [28, 29], "context": [12, 13], "explor": [9, 13, 24], "compar": 13, "async": [9, 19], "asyncpg": [10, 12, 13], "sqlalchemi": [10, 12, 13], "fast": [24, 28, 29], "option": 24, "last": 9, "two": [4, 9, 12, 24], "learn": [4, 9], "practic": 9, "python": [10, 13, 26], "develop": [4, 6, 9, 10, 22, 24, 26], "find": 9, "veri": [4, 9, 10, 24], "attract": 9, "term": 9, "especi": 9, "spend": [9, 12], "most": [4, 9], "wait": 9, "call": [4, 9, 12, 24], "return": [9, 12, 14, 24], "result": [9, 24], "experi": [4, 9, 24], "pure": 9, "combin": 9, "": [9, 10, 24, 26], "orm": [9, 12], "yet": [1, 3, 5, 7, 8, 9, 11, 16, 17, 19, 21, 22, 27], "fulli": [9, 12], "complex": [9, 24], "queri": [9, 24], "wrap": 9, "sync_to_async": 9, "decor": [9, 12], "micro": [9, 10], "seem": 9, "bee": 9, "good": 9, "let": [4, 9, 10, 12, 24], "build": [4, 9, 10], "possibl": [9, 24], "fastapi": [9, 12, 13], "session": 9, "endpoint": [9, 12], "local": [4, 23], "project": [3, 10, 13, 23, 26, 27], "configur": [4, 9, 13, 23], "bash": [], "txt": [4, 9, 10, 12], "db": [4, 9, 12, 24, 26], "schema": [12, 13, 22], "dawda": [], "yo": [], "daw": [], "0": [4, 9, 12, 24], "108": 9, "2": [4, 9, 12, 24], "25": 9, "replac": [3, 9], "psycopg2": 9, "29": 9, "alemb": [9, 12], "13": 9, "wdawd": [], "adawd": [], "relat": [9, 10], "under": [9, 24], "todo": [], "link": [], "short": [], "explan": [], "dont": [], "symtax": [], "have": [4, 9, 12, 24], "mani": 24, "question": [], "reguard": [], "4": [12, 24], "field": [9, 24], "declar": 9, "map": 9, "mapped_column": [], "much": [], "unclear": [], "quit": [], "cryptic": [], "pydant": 13, "manag": [4, 6, 9, 10, 22, 26], "script": [4, 6, 9], "mako": 9, "conftest": [], "ini": [9, 12], "write": [9, 13, 24], "def": [9, 10, 12, 14, 24, 26], "fixtur": [9, 13], "23": 12, "httpx": 12, "librari": [9, 12], "purpos": [4, 12], "26": 12, "aiosqlit": 12, "sqlite": 12, "19": 12, "basic": [4, 9], "blog": [9, 12], "our": [3, 4, 6, 9, 13, 24, 26], "http": [3, 4, 6, 9, 10, 12, 14, 24, 26], "doc": [4, 6, 9, 12, 24], "org": [9, 10, 12], "en": [9, 10, 12, 24], "20": [4, 9], "asyncsess": [9, 12], "create_engin": 9, "ext": [9, 12], "asyncengin": [9, 12], "sessionmak": [9, 12], "database_url": [9, 12], "password": [4, 9], "localhost": 9, "5432": 9, "my_project_db": 9, "echo": 9, "futur": [4, 9], "psql": 9, "shell": [], "help": [9, 26], "u": [4, 9, 24], "latest": [4, 6, 9], "tutori": [4, 9], "initi": [4, 9], "dadad": [], "instal": [9, 10, 12], "follow": [4, 6, 9, 12, 14, 24], "virtualenv": 9, "In": [4, 9, 12, 24], "case": [3, 4, 9, 16], "sudo": [6, 9], "su": 9, "command": [4, 6, 9, 26], "thing": [9, 26], "edit": [3, 4, 9, 24], "specifi": [4, 9], "which": [9, 10, 24], "connect": [4, 9], "project_db": 9, "url": 9, "Then": [4, 6, 9], "inform": 9, "exist": [9, 26], "target_metadata": 9, "metadata": [9, 12], "next": 9, "step": 9, "revis": [4, 9], "autogener": 9, "m": 9, "create_author_articl": 9, "final": [4, 9, 12], "appli": [4, 9], "author": [9, 12], "tabl": [9, 12], "serial": [9, 24], "automat": [9, 26], "json": [9, 12], "vice": 9, "versa": 9, "openapi": 9, "testabl": 9, "appschema": 9, "datetim": [9, 14], "basemodel": 9, "articlebas": 9, "titl": [9, 12], "content": [9, 12], "author_id": [9, 12], "int": 9, "articlecr": [], "instanc": [3, 9, 12, 26], "pass": [], "id": [4, 9, 12, 24], "orm_mod": 9, "authorbas": 9, "first_nam": [9, 12], "last_nam": [9, 12], "authorcr": [], "created_at": [9, 14], "updated_at": 9, "writabl": 9, "element": [4, 9], "absent": 9, "also": [9, 12], "doe": [9, 14, 26], "do": [6, 9, 26], "want": [4, 9, 10, 12, 24], "expos": 9, "inherit": 9, "mappend": [], "mechan": 9, "reproduc": [4, 9], "djangorestframework": 9, "read_onli": 9, "same": [3, 4, 9, 12], "logic": [9, 24], "upgrad": 9, "head": 9, "reusabl": [9, 12, 24], "function": [9, 19], "layer": 9, "permiss": 9, "unitari": 9, "manner": 9, "httpexcept": 9, "select": [4, 9], "articleservic": [9, 12], "should": 9, "method": 9, "staticmethod": 9, "list_articl": 9, "await": [9, 12], "execut": [9, 12, 26], "scalar": 9, "get_articl": 9, "article_id": 9, "get": [6, 9, 12, 24, 27], "none": [9, 24, 26], "rais": 9, "status_cod": [9, 12], "404": [9, 12], "detail": 9, "create_articl": [9, 12], "authorservic": [9, 12], "get_author": 9, "article_inst": 9, "type": [4, 9, 24], "ignor": 9, "arg": [9, 24, 26], "commit": 9, "refresh": 9, "delete_articl": 9, "info": 9, "f": 9, "delet": [9, 12, 26], "list_author": 9, "create_author": [9, 12], "author_inst": 9, "delete_author": 9, "finnal": [], "get_db": [9, 12], "async_sess": [9, 12], "class_": [9, 12], "expire_on_commit": [9, 12], "yield": [9, 12], "could": [4, 9, 24, 26], "been": 9, "easier": 9, "These": [4, 9, 24], "extend": 9, "later": [4, 9], "more": [4, 9, 24], "opinion": [], "lake": [], "conclus": [13, 23], "depend": [4, 9, 10, 12], "statu": [9, 12], "response_model": 9, "list": [4, 9], "http_200_ok": [9, 12], "post": [4, 9, 12, 24], "http_201_creat": [9, 12], "http_204_no_cont": [9, 12], "now": [4, 9, 26], "uvicorn": [9, 10], "reload": [9, 10], "view": [4, 9, 24], "rout": 9, "paramet": 9, "valid": [4, 9], "input": 9, "output": 9, "customis": 9, "hei": [], "homebrew": [], "section": [], "fast_api": [], "fast_api_swagg": [], "empti": 9, "rst": [], "index": [], "repositori": [4, 9, 12], "github": [9, 12, 14, 26], "com": [3, 4, 6, 9, 12, 14, 24, 26], "pipoupiwam": [9, 12], "visit": 9, "8000": [9, 10], "previou": [12, 24], "rollback": 12, "isol": 12, "popul": 12, "ad": [12, 24], "test_servic": 12, "test_main": 12, "overrid": [12, 26], "one": [4, 24, 26], "6": 12, "x": [12, 24], "7": [4, 6, 12], "avail": [1, 3, 4, 5, 6, 7, 8, 11, 12, 16, 17, 19, 21, 22, 27], "onc": 12, "A": [4, 10, 12, 24], "valu": [4, 12, 24], "other": [4, 12, 24], "If": [4, 12], "multipl": [12, 24, 26], "itself": [6, 12], "onli": [4, 12, 24, 26], "drop": 12, "async_db": 12, "async_db_engin": 12, "commun": 12, "pythoon": [], "dependency_overrid": 12, "lambda": 12, "async_cli": 12, "memori": 12, "pytest_asyncio": 12, "async_engin": 12, "create_async_engin": 12, "connect_arg": 12, "check_same_thread": 12, "poolclass": 12, "staticpool": 12, "begin": 12, "conn": 12, "run_sync": 12, "create_al": 12, "drop_al": 12, "autocommit": 12, "autoflush": 12, "bind": 12, "won": 12, "t": 12, "asynccli": 12, "base_url": 12, "testserv": 12, "similar": 12, "syntax": [4, 12], "support": 12, "www": [10, 12], "Not": [1, 3, 5, 7, 8, 11, 16, 17, 19, 21, 22, 27], "stai": [12, 24], "dry": 12, "with_blog_data": 12, "jean_author": 12, "jean": 12, "bob": 12, "aaa": 12, "b": [3, 12], "bbb": 12, "martin_author": 12, "martin": 12, "luc": 12, "c": 12, "ccc": 12, "d": 12, "ddd": 12, "expect": 12, "pytestmark": 12, "mark": 12, "know": [12, 24], "event": 12, "loop": 12, "achiev": [4, 12], "test_get_author_404": 12, "ret": 12, "assert": 12, "http_404_not_found": 12, "test_get_author": 12, "test_create_author": 12, "test_delete_author_404": 12, "256": 12, "test_delete_author": 12, "congratul": 12, "freezegun": 13, "freez": 14, "particularli": 14, "timestamp": 14, "By": 14, "default": [4, 6, 14, 26], "well": 14, "frozen": 14, "approach": [14, 24, 26], "column": [14, 24], "utcnow": 14, "_now": 14, "spulec": 14, "report": 22, "telemetri": 22, "positt": [], "repons": [], "databs": [], "displai": 22, "broker": 22, "avec": [], "le": [], "diff\u00e9rent": [], "flux": [], "done": [4, 22], "posit": 22, "googl": 22, "slide": 22, "flow": 22, "pyinstal": 13, "packag": [4, 13], "simpl": [10, 19], "deploi": [4, 10], "advantag": [10, 24], "No": 10, "everi": [10, 26], "serverless": 10, "lamda": 10, "stabl": 10, "usag": [4, 10], "pip": 10, "cannot": 10, "simpli": 10, "mess": [4, 10], "entrypoint": [10, 26], "root": 10, "pyinstaller_entrypoint": 10, "distribut": [4, 10], "binari": [6, 10, 24], "sure": 10, "properli": 10, "serv": 10, "port": [4, 10], "whatev": 10, "number": [6, 10], "__name__": 10, "__main__": 10, "statement": 10, "correctli": 10, "hidden": 10, "pgproto": 10, "onefil": 10, "detect": 10, "fail": 10, "easi": [10, 24, 26], "self": [10, 24, 26], "worri": 10, "schedul": 23, "rq": 23, "bla": [], "bvla": [], "rqschedul": 26, "lightweight": 26, "altern": 26, "beat": 26, "recur": 26, "job": [4, 26], "util": 26, "timezon": 26, "get_schedul": 26, "queue": 26, "clear_scheduled_job": 26, "ani": 26, "up": [17, 24, 26], "get_job": 26, "register_scheduled_job": 26, "your": [3, 4, 6, 26], "scheduled_tim": 26, "func": 26, "my_job": 26, "interv": 26, "60": 26, "repeat": 26, "sourc": [4, 26], "51": 26, "issuecom": 26, "362352497": 26, "handl": 26, "kwarg": [24, 26], "necessari": 26, "prevent": 26, "duplic": 26, "super": [24, 26], "daemon": 26, "tik": 26, "second": [4, 26], "But": 26, "contrari": 26, "programmat": 26, "startup": 26, "appconfig": 26, "myappconfig": 26, "default_auto_field": 26, "bigautofield": 26, "myapp": 26, "readi": [4, 26], "problem": [4, 26], "insid": [4, 26], "uwsgi": 26, "worker": 26, "There": 26, "eleg": 26, "dictionari": 26, "my_app": 26, "demonstr": 19, "why": 21, "exampl": 21, "concurr": 21, "legaci": 23, "backend": [4, 24], "were": 24, "comput": 24, "retriev": 24, "narrai": 24, "shape": 24, "squar": 24, "rectangular": 24, "than": 24, "000": 24, "tho": [], "thousand": 24, "row": 24, "crush": 24, "redesign": 24, "solv": [4, 24], "grow": 24, "storag": 24, "disadvantag": [4, 24], "matrix": 24, "node": 24, "lat": 24, "decimalfield": 24, "lon": 24, "choicefield": 24, "choic": 24, "matrix_choic": 24, "weekdai": 24, "integerfield": 24, "max_length": 24, "days_of_week": 24, "tripdist": 24, "foreignkei": 24, "from_nod": 24, "to_nod": 24, "distanc": 24, "smallpositiveintegerfield": 24, "entri": 24, "trip": 24, "object": 24, "from_node_id": 24, "111": 24, "to_node_id": 24, "222": 24, "updat": 24, "123": 24, "precis": 24, "deport": 24, "entiti": 24, "take": 24, "lot": [17, 24], "hard": 24, "interest": 24, "rearrang": 24, "them": 24, "hundr": 24, "denorm": 24, "keep": [4, 24], "modifi": [4, 24], "associ": 24, "whole": 24, "overal": 24, "hit": 24, "bottleneck": 24, "reach": 24, "800": 24, "correspond": 24, "640": 24, "remedi": 24, "temporari": 24, "face": 24, "consid": 24, "did": 24, "guarante": 24, "suffici": 24, "longev": 24, "cluster": 24, "crash": 24, "loos": 24, "becaus": 24, "stateless": 24, "end": 24, "again": 24, "instead": [3, 24], "represent": 24, "directli": 24, "binaryfield": 24, "One": [4, 24], "major": [4, 24], "deseri": 24, "pretti": 24, "slow": 24, "avoid": 24, "greatli": 24, "improv": 24, "djangoproject": 24, "5": [4, 24], "howto": 24, "h": 24, "w": 24, "convert": [4, 24], "string": [4, 24], "struct": 24, "pack": 24, "ii": 24, "prepend": 24, "encoded_matrix": 24, "astyp": 24, "uint32": 24, "tobyt": 24, "size": 24, "doubl": 24, "divid": 24, "weight": 24, "numpymatrixfield": 24, "dump": 24, "arrai": 24, "byte": 24, "alongsid": 24, "descript": [3, 17, 24], "save": 24, "nxp": 24, "encod": 24, "bigindian": 24, "integ": 24, "height": 24, "width": 24, "_struct_matrix_shap": 24, "matrix_dtyp": 24, "get_db_prep_valu": 24, "to_python": 24, "ndarrai": 24, "unpack": 24, "buffer": 24, "ownership": 24, "copi": [6, 24], "np": 24, "frombuff": 24, "dtype": 24, "offset": 24, "reshap": 24, "from_db_valu": 24, "And": 24, "gain": 24, "magnitud": 24, "scale": [17, 24], "maximum": 24, "4000": 24, "200m": 24, "around": 24, "400m": 24, "memcach": 24, "top": 24, "even": [4, 24], "saw": 24, "automata": 27, "adapt": 27, "cacheop": 27, "intuit": 24, "decent": 24, "target": 2, "solver": 4, "everydai": 4, "nobodi": 4, "talk": 4, "out": 4, "hashicorp": [4, 6], "webserv": 4, "alwai": 4, "pain": 4, "manual": [4, 17], "linux": [4, 6], "often": [4, 6], "trial": 4, "error": [4, 17], "made": 4, "iter": 4, "inevit": 4, "caus": 4, "evolv": 4, "bug": 4, "roll": 4, "program": 4, "languag": 4, "host": 4, "vpc": [], "privat": [], "studi": 16, "ask": 16, "he": 16, "realli": 16, "introduct": 17, "b2b": 17, "understand": 17, "definit": 17, "cc": 17, "lead": 17, "v": 17, "rate": 17, "workspac": [2, 4], "explain": [], "resourc": 4, "aws_db_subnet_group": 4, "padam": 4, "av": 4, "subnet": 4, "subnet_id": 4, "private_subnet": 4, "replica": [], "cidr": 4, "10": 4, "16": 4, "az": 4, "availability_zon": [], "public_subnet": 4, "24": 4, "101": 4, "102": 4, "enable_dns_support": 4, "enable_dns_hostnam": 4, "tag": 4, "required_provid": 4, "required_vers": 4, "region": 4, "filter": 4, "aws_ami": 4, "most_rec": 4, "owner": 4, "account_id": [], "image_filt": [], "aws_security_group": 4, "sg": 4, "vpc_id": 4, "ssh": 4, "ingress": 4, "from_port": 4, "22": 4, "protocol": 4, "tcp": 4, "to_port": 4, "cidr_block": 4, "traffic": 4, "80": 4, "443": 4, "egress": 4, "check": 4, "create_before_destroi": [], "acount": [], "sur": [], "For": 4, "ubuntu": [3, 4], "recent": 4, "account": [4, 6], "your_account_id": [], "your_timestamped_ami__": [], "aws_db_inst": 4, "allocated_storag": 4, "engine_vers": 4, "12": 4, "instance_class": 4, "db_instance_typ": [], "db_name": 4, "usernam": 4, "db_usernam": [], "db_password": [], "skip_final_snapshot": 4, "db_skip_final_snapshot": [], "deletion_protect": 4, "db_deletion_protect": [], "db_subnet_group_nam": 4, "aws_inst": 4, "instance_typ": 4, "vpc_security_group_id": 4, "default_security_group_id": 4, "key_nam": 4, "instance_key_nam": [], "associate_public_ip_address": 4, "iam_instance_profil": [], "instance_iam_profil": [], "user_data_base64": [], "filebase64": [], "user_data": [], "sh": [], "root_block_devic": 4, "delete_on_termin": 4, "volume_typ": 4, "gp2": 4, "volume_s": 4, "instance_volume_s": [], "django_secret_kei": [], "random_str": [], "postgres_host": [], "address": 4, "plan": 4, "barebon": [], "pull": 4, "blablabla": [], "pour": [], "automatis": [], "encor": [], "plu": [], "ce": [], "cli": 4, "credenti": 6, "access": [4, 6], "curl": 6, "awscli": 6, "amazonaw": 6, "ex": 6, "x86_64": 6, "zip": 6, "o": 6, "awscliv2": 6, "unzip": 6, "aws_access_key_id": 6, "aawdawdawdawdawdawdd": 6, "aws_secret_access_kei": 6, "awd123awd123awd123awd123awd123awd123awd1": 6, "userguid": [4, 6], "wget": [], "apt": [], "releas": 6, "gpg": [], "dearmor": [], "usr": 6, "share": [], "keyr": [], "archiv": [], "deb": [], "sign": [], "lsb_releas": [], "tee": [], "recommand": [], "precompil": 6, "old": 6, "recommend": 6, "chose": 6, "download": [4, 6], "appropri": 6, "termin": [], "terraform_1": 6, "0_linux_amd64": 6, "mv": 6, "bin": 6, "terraform170": 6, "forget": 6, "renam": 6, "kei": [4, 6], "consol": 6, "assum": 4, "tf": [], "variabl": 4, "disk_siz": [], "print": 4, "instance_dn": [], "dn": 4, "gcp": 4, "eu": [3, 4], "plugin": 4, "public": 4, "live": 4, "internet": 4, "replic": 4, "mu": [], "multi": 4, "1a": 4, "1b": 4, "incom": 4, "assign": 4, "subject": [], "rule": [], "outgo": 4, "packer_aws_ami": [], "shelf": 4, "r": [], "preconfigur": 4, "search": 3, "match": 3, "zone": [3, 4], "amd": 3, "64": 3, "ubuntu22": 4, "hvm": 4, "ssd": 4, "jammi": 4, "04": 4, "amd64": 4, "099720109477": 4, "canon": 4, "rewrit": 4, "my_aws_account_id": [], "my_ami_name_": [], "said": 4, "t3": 4, "your_aws_account_id": 4, "your_ami_name_": 4, "awsec2": 4, "pair": 4, "random": 4, "ip": 4, "upon": 4, "recreat": 4, "lose": 4, "reachabl": 4, "through": 4, "advic": 7, "beginn": 7, "cloudpo": 7, "being": 4, "inspect": 4, "et": 4, "voil\u00e0": 4, "got": 4, "repo": 4, "increas": 4, "disk": 4, "alloc": 4, "addit": 4, "fault": 5, "toler": 5, "instance_ip": 4, "public_ip": 4, "database_address": 4, "limit": 4, "resili": 4, "accord": 4, "lack": 4, "ton": 4, "nevertheless": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"cloud": [0, 4], "init": [0, 4], "terraform": [0, 4, 5, 6, 7, 8], "drone": 1, "ci": 1, "devop": 2, "manag": [15, 28, 29], "when": 18, "standup": 18, "django": [20, 21, 22, 23, 25], "set": 20, "organ": 20, "folder": 20, "structur": [9, 12, 20], "environ": 20, "file": 20, "configur": [12, 20], "project": [4, 9, 12, 20, 28, 29], "local": 20, "product": [16, 20], "python": [9, 12, 23, 28, 29], "matric": 24, "mikhail": 28, "zaitsev": 28, "tech": [28, 29], "skill": [28, 29], "experi": [28, 29], "2022": [28, 29], "2023": [28, 29], "padam": [28, 29], "av": [28, 29], "develop": [28, 29], "2019": [28, 29], "mobil": [28, 29], "team": [28, 29], "lead": [28, 29], "2018": [28, 29], "avicen": [28, 29], "entrepreneuri": [28, 29], "2016": [28, 29], "2017": [28, 29], "outscal": [28, 29], "2015": [28, 29], "buffactori": [28, 29], "educ": [28, 29], "languag": [28, 29], "articl": [28, 29], "resum": 29, "asyncio": [9, 19], "fast": [9, 11, 12, 13], "api": [9, 11, 12, 13], "asyncpg": 9, "sqlalchemi": [9, 14], "pytest": [9, 12], "custom": [9, 11], "swagger": 11, "document": [9, 11], "The": [9, 12], "goal": [9, 12], "requir": [9, 10, 12], "databas": [4, 9, 12], "setup": [4, 9], "model": 9, "adawd": [], "migrat": 9, "pydant": 9, "schema": 9, "creat": [3, 7, 9, 12], "crud": 9, "oper": 9, "test": [9, 12], "conclus": [4, 9, 10, 12, 24, 26], "conftest": 12, "py": 12, "new": 24, "engin": 12, "our": [10, 12], "fixtur": 12, "an": [3, 12], "async": 12, "session": 12, "client": 12, "full": 12, "write": 12, "make": 14, "freezegun": 14, "work": 14, "us": 10, "pyinstal": 10, "packag": 10, "fastapi": 10, "websocket": 22, "entri": 10, "point": 10, "execut": 10, "schedul": 26, "rq": 26, "task": [26, 27], "decor": 19, "how": 21, "lock": 21, "tabl": 21, "legaci": 24, "design": 24, "perform": 24, "benefit": 24, "n": 25, "1": 25, "queri": 25, "orm": 25, "run": 27, "onc": 27, "aw": [3, 6], "ami": [3, 4], "packer": 3, "infrastructur": 4, "As": 4, "code": 4, "target": 4, "lean": 16, "featur": 16, "identifi": 17, "solv": 17, "organiz": 17, "bottleneck": 17, "workspac": 8, "vpc": 4, "virtual": 4, "privat": 4, "secur": 4, "group": 4, "instanc": 4, "you": [], "own": [], "amazon": 4, "machin": 4, "imag": 4, "your": [], "final": [], "step": [], "describ": [], "tag": [], "deploy": 4, "instal": [4, 6], "cli": 6, "autoscal": 5, "architectur": 5, "dn": 7, "record": 7, "output": 4, "tf": 4, "what": 4, "": 4, "next": 4}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Cloud Init & Terraform": [[0, "cloud-init-terraform"]], "Management": [[15, "management"]], "When to standup ?": [[18, "when-to-standup"]], "Asyncio Fast API & AsyncPG with SqlAlchemy": [[9, "asyncio-fast-api-asyncpg-with-sqlalchemy"]], "The goal": [[9, "the-goal"], [12, "the-goal"]], "Python requirements": [[9, "python-requirements"], [12, "python-requirements"]], "Project Structure": [[9, "project-structure"], [12, "project-structure"]], "Database Setup": [[9, "database-setup"]], "Create the database": [[9, "create-the-database"]], "Models": [[9, "models"]], "Migrations": [[9, "migrations"]], "CRUD operations": [[9, "crud-operations"]], "Pydantic schemas": [[9, "pydantic-schemas"]], "APIs": [[9, "apis"]], "Customizing the API documentation": [[9, "customizing-the-api-documentation"]], "Testing with Pytest": [[9, "testing-with-pytest"]], "Conclusions": [[9, "conclusions"], [12, "conclusions"], [4, "conclusions"]], "Fast API & PyTest": [[12, "fast-api-pytest"]], "Configure our test database fixtures": [[12, "configure-our-test-database-fixtures"]], "Create an async database engine": [[12, "create-an-async-database-engine"]], "Create an async database session": [[12, "create-an-async-database-session"]], "Create an async client": [[12, "create-an-async-client"]], "Full conftest.py": [[12, "full-conftest-py"]], "Writing tests": [[12, "writing-tests"], [12, "id1"]], "fixtures": [[12, "fixtures"]], "Fast API": [[13, "fast-api"]], "Make Freezegun work with SqlAlchemy": [[14, "make-freezegun-work-with-sqlalchemy"]], "Django Settings organization": [[20, "django-settings-organization"]], "Settings folder structure": [[20, "settings-folder-structure"]], "Environment file configuration": [[20, "environment-file-configuration"]], "Project settings": [[20, "project-settings"]], "Local & Production settings": [[20, "local-production-settings"]], "Django websockets": [[22, "django-websockets"]], "Mikhail Zaitsev": [[28, "mikhail-zaitsev"]], "Tech Skills": [[28, "tech-skills"], [29, "tech-skills"]], "Management Skills": [[28, "management-skills"], [29, "management-skills"]], "Experiences": [[28, "experiences"], [29, "experiences"]], "[2022 - 2023] Padam AV : Python developer": [[28, "padam-av-python-developer"], [29, "padam-av-python-developer"]], "[2019 - 2022] Padam Mobility : Tech team lead": [[28, "padam-mobility-tech-team-lead"], [29, "padam-mobility-tech-team-lead"]], "[2018 - 2019] Avicen : Entrepreneurial project": [[28, "avicen-entrepreneurial-project"], [29, "avicen-entrepreneurial-project"]], "[2016 - 2017] Outscale : Python developer": [[28, "outscale-python-developer"], [29, "outscale-python-developer"]], "[2015 - 2016] Buffactory : Entrepreneurial project": [[28, "buffactory-entrepreneurial-project"], [29, "buffactory-entrepreneurial-project"]], "Education": [[28, "education"], [29, "education"]], "Languages": [[28, "languages"], [29, "languages"]], "Articles": [[28, "articles"], [29, "articles"]], "Resume": [[29, "resume"]], "Using PyInstaller to package our FastAPI": [[10, "using-pyinstaller-to-package-our-fastapi"]], "PyInstaller": [[10, "pyinstaller"]], "Requirements": [[10, "requirements"]], "Entry point": [[10, "entry-point"]], "Executable": [[10, "executable"]], "Conclusion": [[10, "conclusion"], [26, "conclusion"], [24, "conclusion"]], "Customize Fast API swagger documentation": [[11, "customize-fast-api-swagger-documentation"]], "Python / Django": [[23, "python-django"]], "Scheduling RQ tasks with RQ scheduler": [[26, "scheduling-rq-tasks-with-rq-scheduler"]], "Decorators for Asyncio": [[19, "decorators-for-asyncio"]], "How to lock a table in Django": [[21, "how-to-lock-a-table-in-django"]], "Matrices": [[24, "matrices"]], "Legacy": [[24, "legacy"]], "New design": [[24, "new-design"]], "Performances benefits": [[24, "performances-benefits"]], "N + 1 Queries in Django ORM": [[25, "n-1-queries-in-django-orm"]], "Task run Once": [[27, "task-run-once"]], "Drone CI": [[1, "drone-ci"]], "DevOps": [[2, "devops"]], "Create an AWS ami with Packer": [[3, "create-an-aws-ami-with-packer"]], "Terraform autoscaler architecture": [[5, "terraform-autoscaler-architecture"]], "Terraform & AWS-CLI installation": [[6, "terraform-aws-cli-installation"]], "Create DNS record with terraform": [[7, "create-dns-record-with-terraform"]], "Terraform Workspaces": [[8, "terraform-workspaces"]], "Lean product features": [[16, "lean-product-features"]], "Identify and Solve organizational bottlenecks": [[17, "identify-and-solve-organizational-bottlenecks"]], "Terraform": [[4, "terraform"]], "Infrastructure As Code": [[4, "infrastructure-as-code"]], "Terraform Installation": [[4, "terraform-installation"]], "Target infrastructure": [[4, "target-infrastructure"]], "Setup project": [[4, "setup-project"]], "Terraform init": [[4, "terraform-init"]], "VPC : Virtual Private Cloud": [[4, "vpc-virtual-private-cloud"]], "Security groups": [[4, "security-groups"]], "Database": [[4, "database"]], "AMI : Amazon Machine Image": [[4, "ami-amazon-machine-image"]], "Instance": [[4, "instance"]], "outputs.tf": [[4, "outputs-tf"]], "Deployment": [[4, "deployment"]], "What\u2019s next ?": [[4, "what-s-next"]]}, "indexentries": {}})