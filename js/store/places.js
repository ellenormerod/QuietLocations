import axios from 'axios';

//Action types
const GET_PLACES = 'GET_PLACES';

//Action creators
const getPlaces = places => ({type: GET_PLACES, places})

//Thunk creators
export const fetchPlaces = () => dispatch => {
  return axios.get('http://localhost:8080/api/places')
  .then(res => {
    return dispatch(getPlaces(res.data))})
  .catch(err => console.error(err))
  
}

//Reducer
export default function(places = [], action){
  switch (action.type){
    case GET_PLACES:
      return action.places
    default:
      return places
  }
}