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



      <div>
          <p className='title'>My clock</p>
      </div>




        
        <Clock days={currentDay} hours={currentHours} minutes={currentMinuts} secundes={currentSeconds} />
        



          <div className='myImage' alt="background">
            <div className='imgs'> 
              <ion-icon name="logo-github"></ion-icon>
            </div>
            <div className='imgs'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div className='imgs'>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </div>


  
    </div>
  )
}

export default App
