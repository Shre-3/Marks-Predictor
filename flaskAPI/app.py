from flask import Flask, jsonify, request
import pickle
import numpy as np
from flask_cors import CORS
import os


# Get the absolute path of the current file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Full path to the pickle file
PICKLE_PATH = os.path.join(BASE_DIR, "marksmodel.pickle")

if not os.path.exists(PICKLE_PATH):
    raise FileNotFoundError(f"Model file not found at {PICKLE_PATH}")

# Load the pickle file
with open(PICKLE_PATH, "rb") as pickle_in:
    model = pickle.load(pickle_in)



app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def test():
    return "Service Working!"

@app.route('/predict', methods=['POST'])
def predict():
    #change request body to json
    data = request.get_json(force=True)

    #parse values from string to int
    predict_request = [int(data["sex"]), int(data["age"]), int(data["studytime"]), int(data["failures"]), int(data["romantic"]), int(data["goout"]), int(data["Dalc"]), int(data["Walc"]), int(data["G1"]), int(data["G2"]),]

    #convert request to a proper np array that can be understood by predicter
    predict_request = np.array([predict_request])

    # Make A prediction with order sex, age, studytime, failures, romantic, goout, Dalc, Walc, G1, G2
    prediction = model.predict(predict_request)

    return jsonify(prediction[0])


if __name__ == '__main__':
    #app.run(host='0.0.0.0', port=8080, debug=True)
    app.run(port=5000, debug=True)
