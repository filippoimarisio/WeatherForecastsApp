import React, { PureComponent } from 'react'
import {iconsLink} from '../../constants/icons'
import {
  CircularProgress,
  Typography,
} from '@material-ui/core'
import './DisplayForecasts.css'
import InputForm from './InputForm'
import {fetchCityWeather} from '../../actions/city'
import { connect } from 'react-redux'
import NextDaysCard from './NextDaysCard'


class DisplayForecasts extends PureComponent {

  findCity = city => {
    this.props.fetchCityWeather(city)
  };

  render() {
          
    if(!this.props.cityForecasts.list) {
      return (
        <div className='noLocation'>
          <CircularProgress />{' '}
          <Typography>Checking current location...</Typography>
          <div className='noLocationInput'>
            <InputForm findCity={this.findCity}/>
          </div>
        </div>
      )
    }

    const cityForecasts = this.props.cityForecasts
        
    cityForecasts.list.map(period => {
      const splitDate = period.dt_txt.split(/ |-|:/)
      const day = splitDate[2]
      const month = splitDate[1]
      const time = splitDate[3]
      period.day = day
      period.month = month
      period.time = time
      period.weather[0].description = period.weather[0].description.charAt(0).toUpperCase()+ period.weather[0].description.slice(1)
      period.main.temp = (period.main.temp - 273.15).toFixed(0)
      return period
    })

    const dd = cityForecasts.list[0].day
    const mm = cityForecasts.list[0].month

    const dayZero = cityForecasts.list.filter(period => {
      return period.day === dd && period.month === mm
    })

    const dayOne = cityForecasts.list.filter(period => {
      if (period.day === '01') return period.day === '01'
      return Number(period.day) === (Number(dd)+1) && period.month === mm
    })

    const dayTwo = cityForecasts.list.filter(period => {
      if (period.day === '01') return period.day === '01'
      return Number(period.day) === (Number(dayOne[0].day)+1) && period.month === mm
    })

    const dayThree = cityForecasts.list.filter(period => {
      if (period.day === '01') return period.day === '01'
      return Number(period.day) === (Number(dayTwo[0].day)+1) && period.month === mm
    })

    const dayFour = cityForecasts.list.filter(period => {
      if (period.day === '01') return period.day === '01'
      return Number(period.day) === (Number(dayThree[0].day)+1) && period.month === mm
    })

    const dayFive = cityForecasts.list.filter(period => {
      if (period.day === '01') return period.day === '01'
      return Number(period.day) === (Number(dayFour[0].day)+1) && period.month === mm
    })

    return (
      <div className='weatherForecastsWrapper'>
        <h1 className='city'>{cityForecasts.city.name}</h1>

        <div className='weatherNow'>
          <img className='iconNow' alt='' src={`${iconsLink}${cityForecasts.list[0].weather[0].icon}.png`}/>
          <div className='descriptionNow'>
            {cityForecasts.list[0].weather[0].description}
          </div>
        </div>

        <h4 className='laterToday'>Later Today</h4>
        <div className='dayZero' >
          {dayZero.map(period => (
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

        <h4 className='nextDays'>Next Days</h4>
        <div className='nextDaysItems'>
          <NextDaysCard day={dayZero} periodRef={0}/>
          <NextDaysCard day={dayOne} periodRef={5}/>
          <NextDaysCard day={dayTwo} periodRef={5}/>
          <NextDaysCard day={dayThree} periodRef={5}/>
          <NextDaysCard day={dayFour} periodRef={5}/>
          {dayFive[5] ?  (
            <NextDaysCard day={dayFive} periodRef={5}/>
          ):(
          (dayFive.length >= 1 && (
            <NextDaysCard day={dayFive} periodRef={dayFive.length -1}/>
          ))
          )}
        </div>
        <InputForm className='inputForm' findCity={this.findCity}/>
      </div>
    )
  } 
}

const mapStateToProps = ({ cityForecasts }) => {
  return { cityForecasts }
}

export default connect (mapStateToProps,{fetchCityWeather}) (DisplayForecasts)

