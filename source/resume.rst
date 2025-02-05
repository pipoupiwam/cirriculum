Resume
=================

As an experienced Freelance **Python Django Developer** with a deep expertise in **DevOps** and **Amazon Web Services**,
I specialize in delivering high-quality, scalable software solutions tailored to your business needs.

- **Software Development** : Application development with Python and Django to meet your unique requirements.
- **DevOps Consulting**: Optimizing your development and deployment processes to enhance efficiency and reliability.
- **Cloud Solutions**: Build robust, scalable, and secure cloud-based solutions.
- **Performance Optimization**: Enhancing the speed and efficiency of your existing systems to improve user experience and reduce costs.
- **Technical Leadership**: Providing guidance and mentorship to your development teams to ensure best practices and successful project delivery.

With a proven track record of delivering successful projects, I am committed to understanding your goals and collaborating closely with you to achieve outstanding results.



Tech Skills
~~~~~~~~~~~~
- **Python**: Asyncio, Requests, Websockets, Numpy, Redis, PyTest
- **Django**: Django Rest Framework, Celery / rQueu, Caching, Admin, Forms, Django-Filters, **Swagger/OpenAPI**
- **Databases**: Postgres (Database modeling, performance monitoring), Redis (Caching, Timeseries, Stream processing, Pub/Sub, optimized data modeling)
- **Cloud**: Amazon Web Services (EC2, RDS, S3, Autoscaling, IAM, Security Groups, Boto APIs), AWS
- **DevOps**: Nginx, Gunicorn, Supervisor, Systemctl, Cron, Terraform / Packer (Infrastructure as code, AMI generation), Docker (Image creation), CI/CD (Testing & Automation pipelines)
- **Web**: JavaScript, HTML, CSS, Jinja templates, Bootstrap
- **Networking** : Pub/Sub, Stream processing, AWS VPC/SG/Subnets
- **Version Control**: Git (interactive rebase, code reviews)

Management Skills
~~~~~~~~~~~~~~~~~~
- Lead standup meetings and team retrospectives
- Analyze customer needs, conceive solutions, and write technical specifications
- Organize team work and conduct code reviews
- Participate in recruitment processes

Experiences
~~~~~~~~~~~~~

[2024 - 2025] Dryeye-research : Freelance Developer
---------------------------------------------------

At Dryeye-research, I developed a platform from scratch to collect and analyze daily audio logs from patients with dry eye disease.
The goal was to identify daily behaviors that could trigger symptoms using AI.

I designed, developed, and deployed the platform based on business requirements.
The audio logs were recorded using JavaScript and uploaded to the backend via a REST API.
A background task then performed speech-to-text conversion using a local instance of Whisper.
The extracted text was processed by a local Large Language Model (LLM) to extract relevant features such as eye condition, diet, and screen time.
Weekly, the extracted data was analyzed to identify recurring patterns.

To ensure data privacy, AI models were executed asynchronously on dedicated hardware, with synchronization handled through APIs.

**Technologies**: **Python**, **Django**, **DRF**, **LangChain**, **AWS**, **Mistral AI**, **OpenAI**, **Bootstrap**, **HTML**, **CSS**, **JavaScript**

[2024] MaVieLocale : Freelance Python and AI Developer
---------------------------------------------------

MaVieLocale aggregates local points of interests ( museums, monuments ... )  and events ( concerts, expositions, festivals ... ) into a single application.
It faced a challenge in providing a performant search engine based on tags.

I developed an automated tagging engine using langchain and a LLM.
Due to the variety ( or randomness ) of generated tags, I used a vectorial database ( ChromaDB ) to link generated tags with business defined tags.
Example : Searching for a "culture" would return results containing "exposition", "museum", "medieval".
The related tags were sorted by relevant according to the weights assigned by the model.
I delivered two services, one for tagging, another one for linking business and generated tags.

At MaVieLocale, I worked on an application that aggregates local points of interest
(such as museums and monuments) and events (like concerts, exhibitions, and festivals).
The application faced a challenge in providing an efficient search engine based on tags.

To address this, I developed an automated tagging engine using LangChain and a Large Language Model (LLM).
Given the diversity of generated tags, I implemented a vector database (ChromaDB) to map these tags to predefined business categories.
For example, searching for "culture" would return results containing tags like "exhibition," "museum," and "medieval."
The related tags were sorted by relevance based on weights assigned by the model.

I delivered two key services: one for automated tagging and another for linking business-defined tags with generated tags.


**Technologies**: **Python**, **LangChain**, **ChromaDB**

[2022 - 2023] Padam AV : Freelance Python Developer
----------------------------------------------------

At Padam AV, I integrated autonomous vehicles into a Mobility as a Service (MaaS) system,
acting as a virtual driver to issue commands to autonomous vehicles and monitor their progress.
As the sole developer, I designed the project from scratch, established a scalable architecture, developed the MVP,
and later recruited a small team of developers to continue development.

Key Projects and Contributions:

- **WebSocket Microservice**: Developed a Python WebSocket microservice to consume telemetry data from autonomous vehicles.
  This data was restructured into a proprietary format to standardize inputs from various manufacturers.

- **Data Transformation and Distribution**: Transformed data was sent to a Redis pub/sub system, connecting multiple microservices:
 - A dedicated microservice for saving data into the database, ensuring a single point of responsibility for database updates.
 - A WebSocket server that published to various channels, enabling real-time frontend updates for vehicle position, status, and other critical information.

- **Frontend Development**: Developed the frontend using Django with JavaScript to handle WebSocket data, providing real-time updates to users.

- **Roadmap Management**: Created a microservice to pull roadmaps from map services based on differential timestamps,
  storing them in a Redis cache to ensure up-to-date information without database overhead.

- **Decision-Making Graph**: Implemented an asynchronous task that ran every few seconds to execute a decision-making graph.
  This task evaluated vehicle telemetry changes, such as mission completion, and created new missions as needed for subsequent stops.

**Technologies**: **Python**, **Django**, **Websockets**, **Pytest**, **AWS**, Terraform, Asynchronous tasks, Real-time data ingestion

[2019 - 2022] Padam Mobility : Tech Team Lead
----------------------------------------------------------------

At Padam Mobility, I served as a Tech Team Lead for the “Operators” team, comprising 8 developers,
focusing on the backoffice development of the DRT (Demand-Responsive Transport) software suite for transport operators.

Key Projects and Contributions:

- **DRT Simulator**: Developed a dedicated website using Django to facilitate territory-wide DRT simulations.
 This tool featured a multi-section form allowing users to select a territory, configure its settings,
 and upload various simulation scenarios defined in CSV files.
 Upon launching a simulation, it was executed as a Celery task, with results made available for download post-execution.
 This significantly reduced the need for technical intervention and streamlined the simulation process.

- **Geography Database Refactoring**: Led a team to analyze and refactor the geography database system, addressing stability and performance issues.
 The existing system stored DRT stops and travel times in separate tables, leading to unstable usage and poor performance,
 especially with large datasets.
 We implemented a geography versioning system to manage future changes,
 such as adding temporary stops or adjusting for roadworks.
 I conducted benchmarks for travel time matrices, accommodating clients' needs for varying traffic conditions throughout the day and week.
 By centralizing access points, we ensured code stability and achieved significant performance improvements.
 The project's active phase lasted four months, with all clients migrated within a year.

- **CI/CD Pipeline**: Redesigned and stabilized the test suite and CI/CD pipeline, which was initially executed on Jenkins bare metal servers.
 The previous setup often slowed down, especially during peak times, leading to pipeline executions of up to an hour.
 I migrated the pipeline to DroneCI with AWS on-demand infrastructure,
 launching instances to execute new pipelines and utilizing servers with up to 16 cores to expedite execution and reduce costs.
 I optimized test fixtures and setup functions to reuse data or use smaller datasets, further accelerating execution.
 Additionally, I introduced randomized test order execution to detect issues and resolved tests that relied on a dirty database context or poorly performed transactions.
 The dockerized and modular nature of the CI allowed other developers to edit the pipeline in the code, add quality gates, and easily modify project requirements.

- **ELK Suite Deployment**: Deployed and maintained the ELK suite (ElasticSearch, Logstash, Kibana) on AWS as a centralized logging platform.
 Initially, each client had a separate ElasticSearch instance, which was inefficient.
 I migrated the logging infrastructure to a mutualized ELK setup, optimizing the Logstash ingestion pipeline with AWS Auto Scaling groups to handle varying log volumes.
 I removed DEBUG logs and other non-essential logs to reduce backend spam.
 Additionally, I managed index creation in ElasticSearch and reviewed backend logs to standardize and enrich them with relevant information.
 The platform was deployed using Terraform, Packer, and Ansible, facilitating updates and testing.
 The final result was a unified logging platform for all clients, enabling comprehensive statistics and reducing logging costs by 50%,
 despite transitioning from bare metal to more expensive cloud servers. The system ingested approximately 2TB of logs over a six-month period.

- **Padam-OSRM**: Developed a platform using Django and PostGIS to customize OSRM map profiles.
 The platform allowed users to configure map profiles and create polygons with travel time multipliers.
 Once configured, the platform generated an OSRM map Lua profile that connected to the Django database.
 During map creation, OSRM queried the PostGIS database to adjust travel times within defined polygons, enabling custom travel time calibration.
 This tool was also used by the ML team to calibrate travel times based on real ride data.

- **Internal Tools Development** : Developed a Django command to retrieve anonymized databases from production, facilitating local issue reproduction and feature testing.
 This tool allowed browsing available client databases, selecting them by date, and downloading them into a local PostgreSQL instance.

 Created a web interface to streamline the testing process by selecting available Git branches for the frontend and launching specific versions of the code.


**Technologies**: **Python**, **Django**, **Django Rest Framework**, **Pytest**, **PostGis**, OSRM, AWS, Terraform, Drone CI, Numpy, Asynchronous tasks, ETL

[2018 - 2019] Avicen : Entrepreneurial Project
------------------------------------------------

Avicen focuses on optimizing fleet management through edge IoT solutions.

Key Projects and Contributions:

- **Edge IoT Data Processing** : Developed an edge IoT solution to process high-frequency data (e.g., 100Hz accelerometer readings) directly on the vehicle.
 A Docker container running Python scripts processed the data locally,
 filtering out irrelevant information and uploading only significant events such as accelerations, decelerations, speed changes.
 The data was uploaded using the MQTT protocol with a queue to ensure reliability, even in cases of 4G errors or missing connections.

- **ETL Pipeline with Azure IoT**: Set up an ETL pipeline based on Azure IoT to manage the flow of data from the vehicles to our backend.
 Data was received by a Microsoft MQTT server and dispatched to a queue, where Python workers processed and ingested it into PostgreSQL TimescaleDB.

- **Timeseries Data Management**: Initially, we used MongoDB for timeseries data, but
 faced challenges in managing two separate databases and linking business data with timeseries data.
 To streamline our operations, we migrated to PostgreSQL with the TimescaleDB module, allowing us to keep all data in one place.
 This change enabled us to leverage Django Rest Framework (DRF) and django-filters for efficient data management and querying.

- **API Development and Documentation**: Developed APIs using DRF and django-filters to consume and manage the database data.
 Documented the APIs with Swagger, providing comprehensive documentation for our partners who were responsible for frontend development.

**Technologies**: **Python**, **Django**, Django Rest Framework (DRF), django-filters, Docker, Azure IoT, MQTT, PostgreSQL, TimescaleDB, Swagger

[2016 - 2017] Outscale : Python Developer
-------------------------------------------

Outscale is a French cloud provider with an API compatible with Amazon Web Services.

Key Projects and Contributions:

- **VM Maintenance Supervision Tool**: Developed a tool using internal APIs to manage the maintenance lifecycle of Virtual Machines (VMs).
 This tool listed clusters scheduled for maintenance and retrieved client emails.
 It provided a web interface to list all concerned VMs for a given cluster.
 An OPS team member could initiate personalized, transactional email notifications to clients.
 The tool tracked email statuses in the database and used asynchronous tasks to check VM statuses daily.
 If clients did not perform required actions within 7 days of migration, a ticket was opened in ZenDesk and updated daily until the migration.

- **Visitor Management System**: Created a Django app to automate the visitor management process for ISO 27001 certification.
 The app connected to the employees' LDAP server to retrieve the list of employees.
 Visitors used a web interface on an iPad at the entrance to enter their information and select the employee they were visiting.
 The app notified the employee via email and stored visitor data for audit purposes.

- **API Integration Testing**: Developed a tool based on OpenAPI specifications of the Outscale APIs.
 This tool read the API specifications, performed queries, and compared the expected outputs.
 It was used by the quality and documentation teams to ensure API compatibility with AWS and to validate API documentation.

**Technologies**: **Python**, **Django**, **Boto**, AWS, OpenAPI, LDAP, ZenDesk


[2014 - 2016] Buffactory : Entrepreneurial Project
---------------------------------------------------

At Buffactory, my own startup,
I aimed to create a "GitHub for music",  enabling musicians to collaborate simultaneously on musical projects with a git-like workflow.
This idea was born out of the challenges I faced while collaborating on music projects with musicians in different countries.

Key Projects and Contributions:

- **Frontend Interface**: Developed a web interface that allowed users to create branches and select tracks to be blocked for other collaborators,
 facilitating a structured and version-controlled workflow.

- **Client Application**: Created a PyQT client compatible with Windows and MacOS.
 This client pulled project changes or new projects locally, downloaded samples, and received updates from other users,
 notifying them to update the project.

- **XML Parsing and Project Management**: Developed an XML parser to read and manage Ableton project files.
 This enabled the decomposition and recomposition of projects into individual tracks or stems, allowing for version control and collaboration.

- **Sample Management**: Implemented a system to extract samples from projects and upload them to the cloud using S3 APIs.
 Samples were converted to optimized formats (e.g., WAV to FLAC) to reduce storage and bandwidth usage.

- **Performance Optimization**: Addressed performance issues in the client application by implementing multithreading.
 Used a low-level XML parser to handle large XML files efficiently.

**Technologies Used**: **Python**, **Django**, PyQT, AWS, XML Parsing

Education
~~~~~~~~~~

- **EM Lyon** : Innovation Management & Business (2016 - 2017)
- **Epitech** : Software Engineering (2009 - 2014)
- **Beijing Jiaotong University** : Software Engineering (2012 - 2013)

Languages
~~~~~~~~~~

- Fluent in **French** and **Russian**
- Proficient in **English**

Articles
---------

.. toctree::
    :maxdepth: 1

    articles/devops/index
    articles/management/index
    articles/python_django/index
    articles/fast_api/index