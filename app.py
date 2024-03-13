from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import json
import os

app = Flask(__name__, static_folder='static', template_folder='templates')
cors = CORS(app)

@app.route("/")
def index():
    return render_template("login.html")

@app.route("/data.json")
def get_data():
    data_file_path = os.path.join(app.root_path, 'static', 'data.json')
    with open(data_file_path, "r") as file:
        data = json.load(file)
    return jsonify(data)

@app.route("/welcome.html")
def welcome():
    username = request.args.get('username')
    return render_template("welcome.html", username=username)

if __name__ == "__main__":
    app.run(debug=True)