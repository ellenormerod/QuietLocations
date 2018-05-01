import axios from 'axios';
import NewReview from '../components/newreview';

//Action types
const GET_REVIEWS = 'GET_REVIEWS';
const NEW_REVIEW = 'NEW_REVIEW'
//Action creators
const getReviews = reviews => ({type: GET_REVIEWS, reviews})
const newReview = review => ({type: NEW_REVIEW, review})
//Thunk creators
export const fetchReviews = id => dispatch => {
  return axios.get(`http://localhost:8080/api/reviews/${id}`)
  .then(res => dispatch(getReviews(res.data)))
  .catch(err => console.error(err))
}

export const submitReviews = values => dispatch => {
  return axios.post('http://localhost:8080/api/reviews/', values)
  .then(res => dispatch(newReview(res.data)))
  .catch(err => console.error(err))
}

//Reducer
export default function(reviews = [], action){
  switch (action.type){
    case GET_REVIEWS:
      return action.reviews
    case NEW_REVIEW:
      return [...reviews, action.review]
    default:
      return reviews
  }
}