// import React, {useState} from 'react';
// import './App.css';
// import Questions from './components/questions';
// import axios from 'axios';
// import {useQuery} from 'react-query';
// import {Card} from "@material-ui/core";

// const fetchPrediction = async ( query) =>{

//     const res = await fetch ('http://127.0.0.1:5000/predict',{
//       method: 'POST',
//       body: JSON.stringify(query)
//     });

//     return res.json();

// };

// function App() {
//   const [query, setQuery] = useState();
//   const [prediction, setPrediction] = useState();

//   const getPrediction = async(query1)=>{
//       const result = await axios.post('http://127.0.0.1:5000/predict', query1);
//      setPrediction(result.data);
//   };

//   return (
//     <div className="App">
//       <h1> <span role='img' ariel-aria-label='emoji'>🤷🏽‍♀️</span> What Mark Will I Get? <span role='img' ariel-aria-label='emoji'>🤷🏾‍♂️</span></h1>
//       <Questions setQuery={setQuery} getPrediction={getPrediction}/>

//       {prediction &&
//         <div>
//           <h3>Predicted Mark: {prediction*5}% </h3>
//         </div>
//       }

//     </div>
//   );
// }

// export default App;

// App.js - Updated UI
import React, { useState } from "react";
import "./App.css";
import Questions from "./components/questions";
import axios from "axios";
import { Container, Card, CardContent, Typography } from "@material-ui/core";

function App() {
  const [query, setQuery] = useState();
  const [prediction, setPrediction] = useState();

  const getPrediction = async (query1) => {
    const result = await axios.post(
      "https://marks-predictor-2.onrender.com/predict",
      query1
    );
    setPrediction(result.data);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Card elevation={5}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            🤔 What Mark Will I Get? 🤔
          </Typography>
          <Questions setQuery={setQuery} getPrediction={getPrediction} />
          {prediction && (
            <Typography
              variant="h5"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              🎯 Predicted Mark: <strong>{(prediction * 5).toFixed(2)}%</strong>
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
