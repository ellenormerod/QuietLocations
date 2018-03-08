import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import places from './places'
import navigation from './navigation'
// import login from './login'

const AppReducer = combineReducers({
  places,
  navigation
})

export default AppReducer
