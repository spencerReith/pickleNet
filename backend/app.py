from flask import Flask, request, jsonify
from flask_cors import CORS
from db_connector import Connection

app = Flask(__name__)
CORS(app)

db_path = "main.db"


@app.route('/write', methods=['POST'])
def write():
    data = request.form.to_dict()
    print(data)
    connection = Connection(db_path)
    connection.insert_author(data["Author"], data["Article Text"])


    return jsonify({"response": "Success!"})


if __name__ == '__main__':
    app.run()