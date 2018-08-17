import * as React from 'react'
import { connect } from 'react-redux'
import 'json-loader'
import cities from '../constants/city.list.json'
import InputForm from './components/InputForm'
import {fetchCityWeather,fetchCurrentCityWeather} from '../actions/city'
import {getLocation} from '../actions/currentLocation'
import './CityWeather.css'
import DisplayForecasts from './components/DisplayForecasts'

class CityWeather extends React.PureComponent {

  componentDidMount = () => {
    this.props.getLocation()
  }

  findCity = city => {
    this.props.fetchCityWeather(city)
  };

  findCurrentCity = currentCity => {
    this.props.fetchCurrentCityWeather(currentCity)  
  }
  
  render() {

    if(this.props.currentLocation.coords && !this.props.cityForecasts.list) {
      const location = this.props.currentLocation
      this.findCurrentCity(location)
    }

    return (
      <div className='CityWeatherContainer'>
        <InputForm className='inputForm' findCity={this.findCity}/>
        <DisplayForecasts cityForecasts={this.props.cityForecasts}/>
      </div>
    )
  }
}

const mapStateToProps = ({ cityForecasts, currentLocation }) => {
    return { cityForecasts, currentLocation }
}

export default connect(mapStateToProps,{fetchCityWeather, getLocation, fetchCurrentCityWeather})(CityWeather)

