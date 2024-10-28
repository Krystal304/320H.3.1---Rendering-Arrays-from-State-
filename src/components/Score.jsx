import React from 'react'

const Score = ({ score }) => {

  const scoreStyle ={
    borderBottom: '1px solid #26453',
    padding: '5px 0',
    color: 'green',
  };

  return (
    <div style={scoreStyle}>
        <p>Date: <span style={{color: 'red'}}>{score.data}</span></p>
        <p>Score: <span style={{ color: 'red'}}>{score.score}</span></p>
        </div>
  );
};

export default Score;