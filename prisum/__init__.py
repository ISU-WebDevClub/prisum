"""
Flask application for serving static and templated content.
"""
from flask import Flask, render_template


app = Flask(__name__)


@app.errorhandler(404)
def not_found(error):
    """
    Handles requests to routes which do not exist.
    """
    return render_template('404.html', error=error), 404


@app.route('/')
def index():
    """
    Serves up the index page.
    """
    return render_template('index.html')
