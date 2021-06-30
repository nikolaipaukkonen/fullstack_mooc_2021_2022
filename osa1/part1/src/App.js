import React, { useState } from 'react'

const Display = ({counter}) =>  <div>{counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>
      {text}
    </button>
  )


const App = (props) => {
  const [counter, setCounter  ] = useState(0)
  
  console.log('rendering...', counter)

  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter-1)

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        handleClick={increaseByOne}
        text='plus'
        />
      <br/>
      <Button 
      handleClick={setToZero}
        text='zero'
        />
      <br/>
      <Button
        handleClick={decreaseByOne}
          text='minus'
        />
    </div>

  )
}

export default App