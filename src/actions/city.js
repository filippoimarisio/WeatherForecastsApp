import * as request from "superagent";
import {filipposKey} from '../constants/APIkey'
export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'


const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?id=";


export const fetchCityWeather = (cityOBJ) => dispatch => {
    
    const cityID = cityOBJ.id
    request
      .get(`${baseUrl}${cityID}&APPID=${filipposKey}`)
      .then(response =>
        dispatch({
          type: FETCH_CITY_WEATHER,
          payload: response.body
        })
      )
  
      .catch(err => alert(err));
  };