import { useState } from 'react'
import React from 'react'
import { learnerData } from './utilities/data.jsx'
import Learner from './components/Learner.jsx'
import './App.css'

function App() {
  const [learners, setLearners] = useState({ learners: learnerData});

  return (
    <>
    <div>
      <h1>Learners List</h1>
      {learners.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
        
      
    </>
  )
}

export default App
