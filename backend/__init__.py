import os
from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = f"mongodb://localhost:27017/to_do.db"
app.config["MONGO_TRACK_MODIFICATIONS"] = False
db = PyMongo(app)


@app.route('/')
def hello():
    return 'Hello!'
