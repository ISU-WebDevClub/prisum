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

@app.route('/about')
def about():
    """
    Serves up the about page.
    """
    return render_template('about.html')

@app.route('/contact')
def contact():
    """
    Serves up the contact page.
    """
    return render_template('contact.html')

@app.route('/donate')
def donate():
    """
    Serves up the donate page.
    """
    return render_template('donate.html')

@app.route('/faq')
def faq():
    """
    Serves up the FAQ page.
    """
    return render_template('faq.html')

@app.route('/join')
def join():
    """
    Serves up the join page.
    """
    return render_template('join.html')

@app.route('/leaders')
def leaders():
    """
    Serves up the leaders page.
    """
    return render_template('leaders.html')

@app.route('/sponsors')
def sponsors():
    """
    Serves up the sponsors page.
    """
    return render_template('sponsors.html')