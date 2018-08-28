import React, { Component } from 'react';
import CityWeather from './containers/CityWeather';
import { connect } from 'react-redux'
import cloudy from './images/cloudy.jpg'
import rain from './images/rain.jpg'
import clear from './images/clear.jpg'


class App extends Component {

  backgroundImage = (cityForecasts, weatherClasses) => {
    
    const forecasts = this.props.cityForecasts.list[0].weather[0].main
    weatherClasses.pop()

    if (forecasts === 'Clouds') weatherClasses.unshift(cloudy);
    if (forecasts === 'Clear') weatherClasses.unshift(clear);
    if (forecasts === 'Rain') weatherClasses.unshift(rain);
  }

  render() {
            
    const weatherClasses = ['images/white.jpg']

    if (this.props.cityForecasts.list) {
      this.backgroundImage(this.props.cityForecasts, weatherClasses)
    }

    return (
      <div className='mainContainer'
        style={{ 
          padding: 10,
          backgroundImage: `url('${weatherClasses[0]}')`, 
          backgroundSize:'cover',
          "height": "100%",
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
