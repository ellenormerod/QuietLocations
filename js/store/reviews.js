import axios from 'axios';

//Action types
const GET_REVIEWS = 'GET_REVIEWS';

//Action creators
const getReviews = reviews => ({type: GET_REVIEWS, reviews})

//Thunk creators
export const fetchReviews = id => dispatch => {
  return axios.get(`http://localhost:8080/api/reviews/${id}`)
  .then(res => {
    return dispatch(getReviews(res.data))})
  .catch(err => console.error(err))
  
}

//Reducer
export default function(reviews = [], action){
  switch (action.type){
    case GET_REVIEWS:
      return action.reviews
    default:
      return reviews
  }
}