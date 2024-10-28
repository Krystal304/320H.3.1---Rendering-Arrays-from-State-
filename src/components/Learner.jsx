


import React from 'react'
import Score from './Score.jsx';


const Learner = ({ learner }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px'}}>
        <h2>{learner.name}</h2>
        <p>{learner.bio}</p>
        <div>
          <h3>Scores:</h3>
          {learner.scores.map((score, index) =>
          <Score key={index} score={score} />
          )}
        </div>
    </div>
  );
};

export default Learner;