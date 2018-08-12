import React, { Component } from 'react';
import CityWeather from './containers/CityWeather'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <CityWeather/>
      </div>
    );
  }
}

export default App;
