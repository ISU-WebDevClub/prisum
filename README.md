# prisum
The website for PrISUm Solar Car Team at Iowa State University

# Installing
### 1. Download and install [Python 2](https://www.python.org/downloads/) 
Python 2 will be used to run the server. This allows us to use [Jinja2 templates](http://jinja.pocoo.org/docs/dev/) to reduce HTML duplication. _Make sure you install Python 2, **not** Python 3_.

### 2. Create and activate a [Python virtual environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
`pip` is the Python package manager. By default, pip will install all packages to your system Python installation. Virtual environments allow you to make new Python installations and install Python packages on a project-by-project basis. When you activate a virtual environment, you tell your system which executable and packages you want to use. A virtual environment is not technically required, but it is best practice.

### 3. Install the required Python packages
From the root project directory, run the command `pip install -r requirements.txt`. _Make sure your virtual environment is active first._

# Running
To start the server, run the command `python run.py` from the root project directory. As long as this server is running, you will be able to activate the website via localhost.
