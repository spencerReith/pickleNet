from flask import Flask, request, jsonify
from flask_cors import CORS
from db_connector import Connection
import os

app = Flask(__name__)
CORS(app)

db_path = "main.db"


@app.route('/write', methods=['POST'])
def write():
    data = request.form.to_dict()
    image = request.files.get('Image')
    ext = os.path.splitext(image.filename)[1]

    connection = Connection(db_path)
    row_id = connection.insert_author(data["Author"])

    fp = f"images/{row_id}{ext}"
    print(image.save(fp))


    return jsonify({"response": "Success!"})


if __name__ == '__main__':
    app.run()