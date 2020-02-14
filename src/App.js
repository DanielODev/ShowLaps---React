import React, {useState, useEffect} from 'react'
import ShowLaps from './ShowLaps'
import ShowTime from './ShowTime'
import ShowTotalTime from './ShowTotalTime'
import Button from './Button'
import './styles.css'

function App() {
  const [numberOfLaps, setnumberOfLaps] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(()=> {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        console.log('call me!')
        setTime(old => old + 1)
    }, 1000)
  }
  return () => {
    if (timer) { //truthy valor que é convertido para verdadeiro
      clearInterval(timer)
    }
  }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setnumberOfLaps(numberOfLaps + 1)
    console.log('increment')
  }

  const decrement = () => {
    if(numberOfLaps > 0 ) {
      setnumberOfLaps(numberOfLaps - 1)
    console.log('decrement')
    }
  }

  const reset = () =>{
    setnumberOfLaps(0)
    setTime(0)
  }

  return (
    <div className='App'>
     <ShowLaps laps={numberOfLaps} />
      <Button text='+' className='bigger' onClick={increment}/>
      <Button text='-' className='bigger' onClick={decrement}/>
      <ShowTotalTime time={time} />
      {
        numberOfLaps > 0 &&
        <ShowTime time={Math.round(time / numberOfLaps)} />
      }
      <Button className='medium' text={running ? 'Pause' : 'Play'} onClick={toggleRunning} />
      <Button className='medium' text='Reset' onClick={reset}/>
    </div>
  )
}

export default App
