import * as React from 'react'
import { connect } from 'react-redux'
import 'json-loader'
import cities from '../constants/city.list.json'
import InputForm from './components/InputForm'

class CityWeather extends React.PureComponent {


    fetchCityWeather = (city) => {

        const cityID = cities.cities.filter(c =>{
            return c.name === city.city && c.country === city.countryCode
        })[0]

        console.log(cityID)
    }; 

    render() {

        return (
            <div className='CityWeatherContainer'>
                <InputForm fetchCityWeather={this.fetchCityWeather}/>
            </div>
        )
    }
}

export default CityWeather

