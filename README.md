# Final Marks ML Prediction
#### *Fullstack ML Project*
 
 
## Description

This is a fullstack machine learning project consisting of:
* **Machine Learning Model** - This is in the notebooks folder.The model is trained through sklearn's linear regression algorithm to estimate their final exam mark based on severalfactors. This model was then saved in a .pickle file to use in the backend Flask server.

* **Flask API** - A python backend server app with an API route that accepts an array input then uses a pre-defned prediction model to return a single final exam mark.

* **React Client Web App** - This client consumes the Flask API by sending it some inputs from the user then receiving an estimate of that student's final mark according to the parameters supplied.


