# Updating package manager
echo Updating package manager
sudo apt-get update; sudo apt-get upgrade
sudo apt-get install build-essential

# Installing Node JS
echo Installing Node JS
sudo apt-get -y install curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get -y install nodejs

cd src

# Installing / updating dependencies
sudo npm install

# Running test suite
sudo npm test

# Installing node app as a service
# sudo npm install forever -g
# forever start /home/vagrant/src/app/server.js
