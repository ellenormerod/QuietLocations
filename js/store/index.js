import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// import user from './user'
import places from './places'

const reducer = combineReducers({places})
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
)
const store = createStore(reducer, middleware)

export default store
export * from './places'
