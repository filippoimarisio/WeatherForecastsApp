export const GET_LOCATION = 'GET_LOCATION'

if ("geolocation" in navigator) {
  console.log('geolocation is available')
} else {
  console.log('geolocation is NOT available')
}


export function getLocation() {
console.log('in the getlocation first');
   return dispatch => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('in the getlocation second', position.coords);
        dispatch({
            type: GET_LOCATION,
            payload: position
        });
    });
  }
}