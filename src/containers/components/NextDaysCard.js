import React from 'react'
import {iconsLink} from '../../constants/icons'
import './DisplayForecasts.css'

export default (props) => {
  return (
    <div className='periodWrapper'>
      <div className='time'>
          {`${props.day[props.periodRef].day}-${props.day[props.periodRef].month}`}
        </div>
        <div className='description'>
          {props.day[props.periodRef].main.temp}°C
        </div>
        <div>
          <img className='icon' id='icona' alt='' src={`${iconsLink}${props.day[props.periodRef].weather[0].icon}.png`}/>
      </div>
    </div>
  )
}