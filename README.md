Vagrant Workflow
================

Getting started
---------------

The purpose of this tutorial is to build a fully automated build, test, and deploy pipeline.

The tool of choice to achieve the same is Vagrant.

*Note: we will test our API before developing it by simulating the context in which it is going to be used. For example, we ask financial analysts to prepare a balance sheet page and then compare the information they deem relevant with a HTML table mockup we prepared.

This is out of scope for the tutorial but a future version of this tutorial will definitely include an example!!\*

GitHub folder structure
-----------------------

We start by setting up a basic folder structure for our Vagrant project in GitHub:

-	Project folder containing our Vagrantfile and Shell provisioning script
-	Within the project folder, a source folder containing the Node package configuration
-	Within the source folder, the application directory containing all relevant application files
-	Within the source folder, the test directory containing all files required for application testing

Vagrant machine specification
-----------------------------

We now start defining the machine spec we require to run our project:

-	We use hashicorp/precise64 as our base box
-	We use shell provisioning for simplicity (to install the Node JS runtime environment)
-	We configure port forwarding and assign the host IP (required to fix some issues occurring on the Windows platform)
-	We set up folder sharing such that our local Git repository content is mirrored to the VM

Additional considerations
-------------------------

Our objective is to build, test, and run our project in a production like environment!

Some aspects to consider in a production environment:

https://certsimple.com/blog/deploy-node-on-linux

So for an AWS project, we should use a box that maps to our final target:

http://www.iheavy.com/2014/01/16/how-to-deploy-on-amazon-ec2-with-vagrant/

Working behind proxies
----------------------

Vagrant supports working behind proxies via its plugin infrastructure.

Simple `vagrant plugin install vagrant-proxyconf` and configure proxy settings in your Vagrantfile.

For details consult the plugin homepage:

https://github.com/tmatilai/vagrant-proxyconf

Web application development
---------------------------

Now it’s time to write the actual web app that implements our API (our project purpose).

We’ll choose one of the popular frameworks such as Express, Connect, Restify, and so forth.

This will be replaced later on by Swagger:

http://swagger.io/

Test development
----------------

Once we are done we write our testing framework in Mocha and Chai:

https://mochajs.org/ http://chaijs.com/

We can use this tutorial as a beginner's guide to Test Driven Development (TDD) for web apps:

https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

Once we’re done writing code and testing locally (we can use VSCode for that), we commit our changes and `vagrant up` our target environment.

We’ll run the same set of tests but should consider issues such as database connectivity etc.

If testing in a production-like environment runs smoothly, we can take the next step.

Now it’s time to deploy to AWS:

http://www.iheavy.com/2014/01/16/how-to-deploy-on-amazon-ec2-with-vagrant/

Putting it all together
-----------------------

Start by installing all dependencies in your source directory:

```
cd src
npm install
```

If you want to test the app before running it, type in:

`npm test`

The test suite will run and print all test messages to the console.

After testing passes, you can run the example by typing in:

`node app/server.js`

This will start the web application on http://localhost:4000/api

The web application supports a single input parameter `name`.

For example, try the following:

http://localhost:4000/api?name=World

Lessons learned
---------------

-	Windows hosts require special attention: 127.0.0.1 issue
-	Work with proxies behind a firewall? The vagrant proxyconf plugin!
