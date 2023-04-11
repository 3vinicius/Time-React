import './style.css'

export function Clock({days,hours,minutes,secundes}) {
  return(
  <div className="container-Clock">
    <div className='div-Clock'>
      <p className='number'>{days}</p>
      <p className='bottomText'>Days</p>
      </div>
    <div className='div-Clock'>
      <p className='number'>{hours}</p>
      <p className='bottomText'>Hours</p>
      </div>
    <div className='div-Clock'>
      <p className='number'>{minutes}</p>
      <p className='bottomText'>Minutes</p>
      </div>
    <div className='div-Clock'>
      <p className='number'>{secundes}</p>
      <p className='bottomText'>Seconds</p>
      </div>
  </div>
  )
}