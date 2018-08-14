import {GET_LOCATION} from '../actions/currentLocation'

export default (state = [], action = {}) => {
  console.log('in the getlocation reducer', action.payload)

    switch (action.type) {
        case GET_LOCATION:
            return action.payload
        default:
            return state
  }
}