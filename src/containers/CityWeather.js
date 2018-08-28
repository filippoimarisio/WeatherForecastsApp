import * as React from 'react'
import { connect } from 'react-redux'
import 'json-loader'
import {fetchCurrentCityWeather} from '../actions/city'
import {getLocation} from '../actions/currentLocation'
import DisplayForecasts from './components/DisplayForecasts'


class CityWeather extends React.PureComponent {

  componentDidMount = () => {
    this.props.getLocation()
  }

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
        <DisplayForecasts />
      </div>
    )
  }
}

const mapStateToProps = ({ cityForecasts, currentLocation }) => {
  return { cityForecasts, currentLocation }
}

export default connect(mapStateToProps,{ getLocation, fetchCurrentCityWeather})(CityWeather)

