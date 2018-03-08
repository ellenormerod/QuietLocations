import {createStore, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import places from './js/store/places'
import navigation from './js/store/navigation'
import loginReducer from './js/store/login'

const config = {
  key: 'primary',
  storage
}

const login = persistReducer(config, loginReducer)

const rootReducer = combineReducers({
  places,
  navigation,
  login
})

function configureStore() {
  let store = createStore(rootReducer)
  let persistor = persistStore(store);
  return {persistor, store}
}

export default configureStore

// import {createStore, combineReducers} from 'redux';

// import places from './js/store/places'

// const rootReducer = combineReducers({
//   places
// })

// function configureStore() {
//   let store = createStore(rootReducer)
//   return {store}
// }

// export default configureStore