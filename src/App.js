import React, { Component } from 'react';
import CityWeather from './containers/CityWeather';
import { connect } from 'react-redux'
import './App.css'

class App extends Component {

  backgroundImage = (cityForecasts, weatherClasses) => {
    
      const forecasts = this.props.cityForecasts.list[0].weather[0].main
      weatherClasses.pop()

      if (forecasts === 'Clouds') weatherClasses.unshift('http://www.wallpapers4u.org/wp-content/uploads/clouds_reflection_sky_water_white_blue_6431_1920x1080.jpg');
      if (forecasts === 'Clear') weatherClasses.unshift('https://aliaydin29.files.wordpress.com/2011/03/vadi-arka-plan.jpg');
      if (forecasts === 'Rain') weatherClasses.unshift('https://wallpaper-house.com/data/out/11/wallpaper2you_468152.jpg');
  }

  render() {
            

    const weatherClasses = ['https://www.publicdomainpictures.net/pictures/200000/nahled/plain-white-background-1480544970glP.jpg','https://www.publicdomainpictures.net/pictures/200000/nahled/plain-white-background-1480544970glP.jpg']

    if (this.props.cityForecasts.list) {
      this.backgroundImage(this.props.cityForecasts, weatherClasses)
    }

    return (
      <div className='mainContainer'
        style={{ 
          padding: 10, 
          backgroundImage: `url('${weatherClasses[0]}')`, 
          backgroundSize:'cover'
        }}>
        <CityWeather/>
      </div>
    );
  }
}

const mapStateToProps = ({ cityForecasts }) => {
  return { cityForecasts }
}

export default connect(mapStateToProps)(App)
