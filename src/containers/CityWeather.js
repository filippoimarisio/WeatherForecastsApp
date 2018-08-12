import * as React from 'react'
import { connect } from 'react-redux'
import 'json-loader'
import cities from '../constants/city.list.json'
import InputForm from './components/InputForm'
import {fetchCityWeather} from '../actions/city'
import DisplayForecasts from './components/DisplayForecasts'

class CityWeather extends React.PureComponent {


    findCity = (city) => {
        const cityOBJ = cities.cities.filter(c =>{
            return c.name === city.city && c.country === city.countryCode
        })[0]
        this.props.fetchCityWeather(cityOBJ)
    };

    render() {
        return (
            <div className='CityWeatherContainer'>
                <InputForm findCity={this.findCity}/>
                <DisplayForecasts cityForecasts={this.props.cityForecasts}/>
            </div>
        )
    }
}

const mapStateToProps = ({ cityForecasts }) => {
    return { cityForecasts }
}

export default connect(mapStateToProps,{fetchCityWeather})(CityWeather)

