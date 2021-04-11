import React, { useState } from 'react'

const Anecdote = ({anecdote, points}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>This anecdote has {points} points.</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0]);
   
  const [selected, setSelected] = useState(0)

  const randInt = () => {
    let rand = Math.floor(Math.random() * anecdotes.length);
    while (rand === selected) {
      rand = Math.floor(Math.random() * anecdotes.length);
    }
    return rand;
  }

  const incCurrentPoints = () => {
    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
  }

  const maxPointsIndex = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdote={anecdotes[selected]} points={points[selected]} />
      <button onClick={() => setSelected(randInt())}>Next Anecdote</button>
      <button onClick={() => incCurrentPoints()}>Vote</button>
      <h1>Anecdote with Most Votes</h1>
      <Anecdote anecdote={anecdotes[maxPointsIndex]} points={points[maxPointsIndex]} />
    </div>
  )
}

export default App