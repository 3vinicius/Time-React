import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Clock } from './Components/Clock';

function App() {
  const [currentDay,setCurrentDay] = useState(0)
  const [currentHours,setCurrentHours] = useState(0)
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [currentMinuts, setCurrentMinuts] = useState(0)
  
    useEffect(() => {
      setInterval(() => {
        const date = new Date()
        setCurrentDay(date.getUTCDate())
        setCurrentHours(date.getHours())
        setCurrentSeconds(date.getSeconds())
        setCurrentMinuts(date.getMinutes())
      }, 1000);
    }, [currentDay] ) 

  return (
    <div className="App">
      <section className='section-myImage'>
      <Clock days={currentDay} hours={currentHours} minutes={currentMinuts} secundes={currentSeconds} />
      <div className='container-myImage'><div className='myImage' alt="background"></div></div>
      </section>
    </div>
  )
}

export default App
