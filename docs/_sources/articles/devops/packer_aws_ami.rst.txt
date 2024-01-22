Create an AWS ami with Packer
===================================

Not yet available

Packer description; infrastructure as code; AMI replacement instead of edition
Packer documentation

Go to https://cloud-images.ubuntu.com/locator/ec2/ and search for an AMI that matches :

- The ubuntu version required by your project
- Available in the same zone as your deployment ( in our case :b:`eu-central-1` )
- The architecture of the instance : amd-64

