import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import places from './places'
import reviews from './reviews'
// import navigation from './navigation'
// import login from './login'

const AppReducer = combineReducers({
  places,
  reviews
})
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
)

const store = createStore(AppReducer, middleware)

export default store
export * from './places'
export * from './reviews'
