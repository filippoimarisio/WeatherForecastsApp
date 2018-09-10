import React from 'react'
import {iconsLink} from '../../constants/icons'
import './DisplayForecasts.css'

export default (props) => {
  return (
    <div className='dayZero' >
          {props.dayZero.map(period => (
            <div key={period.dt} className='periodWrapper'>
              <div className='time'>
                {`${period.time}:00`}
              </div>
              <div className='description'>
                {period.main.temp}°C
              </div>
              <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
            </div>
          ))}
        </div>
  )
}