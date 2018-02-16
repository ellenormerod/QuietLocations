import {createStore, combineReducers} from 'redux';

import places from './js/store/places'

const rootReducer = combineReducers({
  places
})

function configureStore() {
  let store = createStore(rootReducer)
  return {store}
}

export default configureStore
