import configureStore from 'redux-mock-store';
import {expect} from 'chai';
import {fetchPlaces} from '../places';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureStore(middlewares);


describe('thunk creators in places', () => {
    let store
    let mockAxios
    const inititalState = {places: []}
  
    beforeEach(() => {
      mockAxios = new MockAdapter(axios)
      store = mockStore(inititalState)
    })
  
    afterEach(() => {
      mockAxios.restore()
      store.clearActions()
    })
  
    describe('fetchPlaces', () => {
      it('dispatches the GET PLACES action', () => {
        const fakePlaces = {name: '25 Degrees', location: '736 N Clark St. Chicago, IL 60654', noise: 2}
        mockAxios.onGet(`http://localhost:8080/api/places`).replyOnce(200, fakePlaces)
        return store.dispatch(fetchPlaces())
          .then(() => {
            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('GET_PLACES')
            expect(actions[0].places).to.be.deep.equal(fakePlaces)
          })
      })
    })
})