from flask import Flask
import json

app = Flask(__name__)

@app.route('/')
def home():
    with open('config.json', 'r') as config_file:
        config = json.load(config_file)
    return config['message']

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
