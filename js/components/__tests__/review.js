import React from 'react';
import Review from '../review';
import renderer from 'react-test-renderer';

const fakeProps = {
  review: {
    comments: 'Super great bar, would come back due to noise level',
    noise: 3
  },
}


it('renders Review using Snapshot', () => {
  expect(renderer.create(
    <Review {...fakeProps} />
  )).toMatchSnapshot()
})
