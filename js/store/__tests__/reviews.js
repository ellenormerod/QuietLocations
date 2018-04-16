import configureStore from 'redux-mock-store';
import {expect} from 'chai';
import {fetchReviews} from '../reviews';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureStore(middlewares);

describe('thunk creators in reviews', () => {
    let store
    let mockAxios
    let userId = 1
    const inititalState = {reviews: []}
  
    beforeEach(() => {
      mockAxios = new MockAdapter(axios)
      store = mockStore(inititalState)
    })
  
    afterEach(() => {
      mockAxios.restore()
      store.clearActions()
    })
  
    describe('fetchReviews', () => {
      it('dispatches the GET REVIEWS action', () => {
        const fakeReview = {title: 'Not Great', comments: 'Around 9 pm on a Friday this restaurant was playing music very loudly.', noise: 2, placeId: 1, userId: userId}
        mockAxios.onGet(`http://localhost:8080/api/reviews/${userId}`).replyOnce(200, fakeReview)
        return store.dispatch(fetchReviews(userId))
          .then(() => {
            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('GET_REVIEWS')
            expect(actions[0].reviews).to.be.deep.equal(fakeReview)
          })
      })
    })
})
