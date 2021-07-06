import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteNumber, setVoteNumber] = useState(0)
  const [voteNumbers, setVoteNumbers] = useState([0,0,0,0,0,0,0])

  const copy = [...voteNumbers]

  const pushAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
    setVoteNumber(selected)
    console.log('Selected is', selected)
  }

  const pushVote = () => {
    setVoteNumber(selected)
    copy[voteNumber] += 1
    setVoteNumbers(copy)
    console.log('Vote registered for', voteNumber)
    console.log('Current votes:', copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <button onClick={pushAnecdote}>Next anecdote</button>
      <button onClick={pushVote}>Vote</button>
      <br></br>
      <p>Has {voteNumbers[selected]} votes</p>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[voteNumbers.indexOf(Math.max(...voteNumbers))]}
    </div>
  )
}

export default App