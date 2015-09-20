# prisum
The website for PrISUm Solar Car Team at Iowa State University

# Installing
### 1. Download and install Python 2
[Python 2](https://www.python.org/downloads/) will be used to run the server. This allows us to use [Jinja2 templates](http://jinja.pocoo.org/docs/dev/) to reduce HTML duplication. _Make sure you install Python 2, **not** Python 3_. Python versions older than 2.7.9 do not include the package manager, pip. For those versions, you will need to [manually install pip](https://pip.pypa.io/en/stable/installing/).

### 2. Create and activate a Python virtual environment
By default, pip will install all packages to your system Python installation. [Virtual environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/) allow you to make new Python installations and install Python packages on a project-by-project basis. When you activate a virtual environment, you tell your system which executable and packages you want to use. A virtual environment is not technically required, but it is best practice.

These bash commands will install a virtual environment named "prisum".
```
pip install virtualenv
mkdir ~/.virtualenvs
cd ~/.virtualenvs
virtualenv prisum
```

This bash command will activate the virtual environment.
```
source ~/.virtualenvs/prisum/bin/activate
```

### 3. Install the required Python packages
From the root project directory, run the command `pip install -r requirements.txt`. _Make sure your virtual environment is active first._

# Running
To start the server, run the command `python run.py` from the root project directory. As long as this server is running, you will be able to activate the website via localhost.

# Configuring PyCharm
[PyCharm](https://www.jetbrains.com/pycharm/) is the recommended IDE for this project. JetBrains offers [free full versions](https://www.jetbrains.com/student/) of all of their IDEs for students, including PyCharm, but the community edition will also work for this project.

### 1. Setup the Python interpreter for the project
With the project open in PyCharm, open the [Settings](https://www.jetbrains.com/pycharm/help/settings-preferences-dialog.html) dialog and navigate to the [Project Interpreter](https://www.jetbrains.com/pycharm/help/project-interpreter.html) page. Click on the gear icon in the top-right and select the "Add Local" option to select a Python interpreter executable. If you followed the installation instructions above, it is at `~/.virtualenvs/prisum/Scripts/python.exe` (or `~/.virtualenvs/prisum/bin/python2.7` on OSX and Linux).

### 2. Setup the run configuration
Having to activate a virtual environment, navigate to the project directory, and execute the `python run.py` command just to start the server is a bit annoying. Let's make the IDE do it for us! Open the [Run Configurations](https://www.jetbrains.com/pycharm/help/run-debug-configurations.html) dialog. Click on the green **+** icon in the top-left and select "Python" from the list of configuration types. Configure the "Script" and "Working directory" fields accordingly. Also make sure that the "Python interpreter" option points to your virtual environment directory.

![Configuration](http://content.screencast.com/users/branden.lange/folders/Jing/media/72ad5446-11de-4dc5-aa06-9041b6e3c647/00000146.png)

### 3. Mark the sources root directory
The import system for Python projects is based on the host machine's operating system.  Because of this, you will need to specify a "sources root" directory for PyCharm so that it knows where to import project files from. Simply right-click on the `prisum` directory (the second one) and choose "Mark Directory As > Sources Root".
