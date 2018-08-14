import {FETCH_CITY_WEATHER} from '../actions/city'
import {FETCH_CURRENT_CITY_WEATHER} from '../actions/city'


export default (state = [], action = {}) => {

    switch (action.type) {
        case FETCH_CITY_WEATHER:
            return action.payload
        case FETCH_CURRENT_CITY_WEATHER:
            return action.payload
        default:
            return state
  }
}