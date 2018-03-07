import {combineReducers} from 'redux'
import places from './places'
import navigation from './navigation'
// import login from './login'

const AppReducer = combineReducers({
  places,
  navigation
})

export default AppReducer
