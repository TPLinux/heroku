# coding: utf-8
from flask import Flask, render_template, request, url_for  # noqa url_for('static', filename='css/main.css')
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
