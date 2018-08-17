import * as request from "superagent";
import {filipposKey} from '../constants/APIkey'
 
export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'
export const FETCH_CURRENT_CITY_WEATHER = 'FETCH_CURRENT_CITY_WEATHER'

const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?";

export const fetchCityWeather = cityOBJ => dispatch => {
    
  const cityID = cityOBJ.id
  request
    .get(`${baseUrl}id=${cityID}&APPID=${filipposKey}`)
    .then(response =>
      dispatch({
        type: FETCH_CITY_WEATHER,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const fetchCurrentCityWeather = currentCity => dispatch => {
    
  const cityLat = currentCity.coords.latitude
  const cityLon = currentCity.coords.longitude
  request
    .get(`${baseUrl}lat=${cityLat}&lon=${cityLon}&APPID=${filipposKey}`)
    .then(response =>
      dispatch({
        type: FETCH_CURRENT_CITY_WEATHER,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};




