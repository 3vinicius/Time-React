import './style.css'

export function Clock({days,hours,minutes,secundes}) {
  return(
  <div className="container-Clock">
    <div className='div-Clock'>{days}</div>
    <div className='div-Clock'>{hours}</div>
    <div className='div-Clock'>{minutes}</div>
    <div className='div-Clock'>{secundes}</div>
  </div>)
}