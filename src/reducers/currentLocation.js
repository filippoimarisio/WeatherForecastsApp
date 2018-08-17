import {GET_LOCATION} from '../actions/currentLocation'

export default (state = [], action = {}) => {

  switch (action.type) {
    case GET_LOCATION:
      return action.payload
    default:
      return state
  }
}