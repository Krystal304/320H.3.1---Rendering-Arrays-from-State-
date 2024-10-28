


import React from 'react'
import Score from './Score.jsx';


const Learner = ({ learner }) => {

  const learnerStyle = {
    border: '2px solid #264653',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: 'tan',
    color: 'brown',
  };
  const bioStyle = {
    fontStyle: 'italic',
    color: 'blue',

  }
  return (
    <div style={learnerStyle}>
        <h2>{learner.name}</h2>
        <p style={bioStyle}>{learner.bio}</p>
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