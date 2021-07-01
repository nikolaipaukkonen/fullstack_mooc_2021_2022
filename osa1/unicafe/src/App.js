import React, { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>No feedback given yet.</div>
    )
  }
  return (
    <div>
        <h1>Statistics</h1>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>{props.allClicks.join(' ')}</p>
        <p>Total: {props.good+props.bad+props.neutral}</p>
        <p>Average: {(props.good+(props.bad*(-1))) / (props.good+props.bad+props.neutral)}</p>
        <p>Positive: {(props.good / (props.good+props.bad+props.neutral))*100} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const goodClick = () => {
    setGood(good+1)
    setAll(allClicks.concat('g'))
  }

  const neutralClick = () => {
    setNeutral(neutral+1)
    setAll(allClicks.concat('n'))
  }
  const badClick = () => {
    setBad(bad+1)
    setAll(allClicks.concat('b'))
  }

  return (
    <div>
      <div>
        <h2>Tehtävät 1.6. - 1.14.</h2>
        <h1>Give feedback</h1>

        <button onClick={goodClick}>Good</button>

        <button onClick={neutralClick}>Neutral</button>

        <button onClick={badClick}>Bad</button>
        
        <History allClicks={allClicks} />

      </div>
    </div>
  )
}

export default App

//1.8 refaktoroi tilastojen näyttäminen omaan komponenttiin Statistics
//1.9 jos palautteita ei ole, ei näytetä tilastoja
//1.10 eriytä Button ja StatisticLine omiksi komponenteikseen
//1.11 näytä tilastit html-taulukkona