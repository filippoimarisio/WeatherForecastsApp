import React from 'react'
import {iconsLink} from '../../constants/icons'
import './DisplayForecasts.css'

export default (props) => {
  return (
    <div className='weatherNow'>
      <img className='iconNow' alt='' src={`${iconsLink}${props.cityForecasts.list[0].weather[0].icon}.png`}/>
      <div className='descriptionNow'>
        {props.cityForecasts.list[0].weather[0].description}
      </div>
    </div>
  )
}