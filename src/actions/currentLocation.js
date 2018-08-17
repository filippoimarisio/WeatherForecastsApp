export const GET_LOCATION = 'GET_LOCATION'

export function getLocation() {
  
  return dispatch => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: GET_LOCATION,
        payload: position
      });
    });
  }
}