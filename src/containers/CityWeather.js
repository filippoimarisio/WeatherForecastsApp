import * as React from 'react'
import { connect } from 'react-redux'
import 'json-loader'
import cities from '../constants/city.list.json'
import InputForm from './components/InputForm'
import {fetchCityWeather,fetchCurrentCityWeather} from '../actions/city'
import {getLocation} from '../actions/currentLocation'

import DisplayForecasts from './components/DisplayForecasts'

class CityWeather extends React.PureComponent {


  componentDidMount() {
      this.props.getLocation()
  }

  findCity = (city) => {
    const cityOBJ = cities.cities.filter(c =>{
      return c.name === city.city && c.country === city.countryCode
    })[0]
    this.props.fetchCityWeather(cityOBJ)
  };

  findCurrentCity = (currentCity) => {
    this.props.fetchCurrentCityWeather(currentCity)  
  }
  

  render() {

    if(this.props.currentLocation.coords && !this.props.cityForecasts.list) {
      const location = this.props.currentLocation
      console.log('in the render function', location)
      this.findCurrentCity(location)
    }

    return (
      <div className='CityWeatherContainer'>
        <InputForm findCity={this.findCity}/>
        <DisplayForecasts cityForecasts={this.props.cityForecasts}/>
      </div>
    )
  }
}

const mapStateToProps = ({ cityForecasts, currentLocation }) => {
  console.log('in the MSTP', currentLocation)
    return { cityForecasts, currentLocation }
}

export default connect(mapStateToProps,{fetchCityWeather, getLocation, fetchCurrentCityWeather})(CityWeather)

