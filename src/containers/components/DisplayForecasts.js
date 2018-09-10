import React, { PureComponent } from 'react'
import {
  CircularProgress,
  Typography,
} from '@material-ui/core'
import './DisplayForecasts.css'
import InputForm from './InputForm'
import {fetchCityWeather} from '../../actions/city'
import { connect } from 'react-redux'
import NextDaysCard from './NextDaysCard'
import {daysSplit} from './daysSplit';
import LaterToday from './LaterToday'
import WeatherNow from './WeatherNow'

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
    const days = daysSplit(cityForecasts)

    return (
      <div className='weatherForecastsWrapper'>
        <h1 className='city'>{cityForecasts.city.name}</h1>
        <WeatherNow cityForecasts={cityForecasts}/>
        <h4 className='laterToday'>
          Later Today
        </h4>
        <LaterToday dayZero={days.dayZero}/>
        <h4 className='nextDays'>
          Next Days
        </h4>
        <div className='nextDaysItems'>
          <NextDaysCard day={days.dayZero} periodRef={0}/>
          <NextDaysCard day={days.dayOne} periodRef={5}/>
          <NextDaysCard day={days.dayTwo} periodRef={5}/>
          <NextDaysCard day={days.dayThree} periodRef={5}/>
          <NextDaysCard day={days.dayFour} periodRef={5}/>
          {days.dayFive[5] ?  (
            <NextDaysCard day={days.dayFive} periodRef={5}/>
          ):(
            (days.dayFive.length >= 1 && (
              <NextDaysCard day={days.dayFive} periodRef={days.dayFive.length -1}/>
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

