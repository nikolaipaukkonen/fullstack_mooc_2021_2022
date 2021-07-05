import React, { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>No feedback given yet.</div>
    )
  } else {
    return (
      <div><Statistics allClicks={props.allClicks}/></div>
    ) 
  }
}

const Statistics = (props) => {
  const gnb = props.allClicks.join(' ') //join votes into a string
  const g = gnb.split("g").length -1 // count votes from the string
  const n = gnb.split("n").length -1
  const b = gnb.split("b").length -1
  const all = n+g+b

  const average = (g+(b*(-1))) / (g+b+n)
  const positive = (g / (g+b+n))*100

  return (        
    <div>
      <h1>Statistics</h1>
      <table border="solid-black">
        <tbody>
          <tr>
            <td>Good</td><td>{g}</td>
          </tr>
          <tr>
            <td>Bad</td><td>{b}</td>
          </tr>
          <tr>
            <td>Neutral</td><td>{n}</td>
          </tr>
          <tr>
            <td>Total</td><td>{all}</td>
          </tr>
          <tr>
            <td>Average</td><td>{average}</td>
          </tr>
          <tr>
            <td>Positive</td><td>{positive} %</td>
          </tr>
        </tbody>
      </table>

      <p>{gnb}</p>
    </div>
    )
}

const Button = (props) => {
  const today = new Date()
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  console.log(time + ' - props value is ', props)

  const {handleClick, text} = props

  return (  <button onClick={handleClick}>
    {text}
  </button>
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
        <h2>Tehtävät 1.6. - 1.11.</h2>
        <h1>Give feedback</h1>

        <Button handleClick={goodClick} text ='Good' />

        <Button handleClick={neutralClick} text = 'Neutral' />

        <Button handleClick={badClick} text = 'Bad' />
        
        <History allClicks={allClicks} />

      </div>
    </div>
  )
}

export default App