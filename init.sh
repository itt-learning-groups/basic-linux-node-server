#!/bin/bash

sudo yum update -y

# install git and clone the basic-linux-node-server files
sudo yum install -y git
git clone https://github.com/us-learn-and-devops/basic-linux-node-server.git

# run server init for "blue"
./basic-linux-node-server/setup.sh blue

# run server init for "green"
# ./basic-linux-node-server/setup.sh green
