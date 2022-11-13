from distutils.log import debug
from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit
from flask_sqlalchemy import SQLAlchemy
import mysql.connector
from flask import routes

def create_app(config_object = "app.settings"):
    app = Flask(__name__)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config['SQLALCHEMY_DATABASE_URI']= 'mysql://root:senha@localhost/dbname'
    app.config['SECRET'] = 'secret!123'
    app.register_blueprint(routes)
    return app
app  = create_app()
socketio = SocketIO(app, cors_allowed_origins
                    ='*')
@socketio.on("connect")
def connected():
    print(request.sid)
    print("client has connected")
    emit('connect', {"data":f"id:{request.sid} is connected"})
    

@socketio.on('message')
def handle_message(message):
    print("Receive Message: "+ message)
    if message != "User connected!": 
        send(message, broadcast = True)
@app.route('/')
def index():
    return render_template('index.html') 

if __name__ == '__main__':
    
    socketio.run(app, debug=True,  host = 'localhost')