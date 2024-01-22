Terraform & AWS-CLI installation
==================================

.. role:: b(code)
  :language: bash
  :class: highlight

To work with terraform on AWS we will need to install terraform itself and AWS-CLI to manage our AWS credentials.


**Terraform**

I recommend to install terraform using a precompiled binary for your system, I often encounter terraform scripts
developed with old version and not compatible with the latest release. Using precompiled binaries allows to easily setup
a working development environment.

Chose a version to install and download the appropriate binary for your system :  https://developer.hashicorp.com/terraform/install

Unzip the folder containing the binary. Then copy it into :b:`/usr/bin` to make it available system wide. Do not forget
to rename the binary to add a version number.

.. code-block:: bash

    unzip terraform_1.7.0_linux_amd64.zip
    mv terraform /usr/bin/terraform170


**AWS CLI**

AWS CLI Installation : https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

We will use :b:`Amazon Web Services` to run our infrastructure, :b:`terraform` needs :b:`AWS` API credentials to
access our AWS account.

To install the `AWS CLI`, run the following commands :

.. code-block:: bash

    $ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    sudo ./aws/install

Then add your AWS credentials in  :b:`~/.aws/credentials` :

.. code-block:: bash

    [default]
    aws_access_key_id = AAWDAWDAWDAWDAWDAWDD
    aws_secret_access_key = awd123awd123awd123awd123awd123awd123awd1

You can generate aws access keys in the aws web console.
