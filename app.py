from flask import Flask, send_from_directory, render_template
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from api.HelloApiHandler import ControlApi

app = Flask(__name__, static_url_path = '', static_folder='myfirstreact/src')
CORS(app)
api = Api(app)

@app.route('/', defaults={'path':''})
def index(path):
	return send_from_directory(app.static_folder, 'index.html')

api.add_resource(ControlApi, '/flask')

if __name__ == '__main__':
	app.run(debug=True)