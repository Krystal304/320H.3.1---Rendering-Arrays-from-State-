import React from 'react'

const Score = ({ score }) => {
  return (
    <div>
        <p>Date: {score.data}</p>
        <p> Score: {score.score}</p>
        </div>
  );
};

export default Score;