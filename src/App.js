import React, { Component } from 'react';
import CityWeather from './containers/CityWeather';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <CityWeather/>
      </div>
    );
  }
}

export default App;
