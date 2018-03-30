import React from 'react';
import { Place } from '../place';
import renderer from 'react-test-renderer';

const fakeProps = {
  item: {
    name: 'Great Bar',
    location: '123 W Cool Street St. Chicago, IL',
    noise: 3
  },
  loadReviews: () => { }
}


it('renders Places using Snapshot', () => {
  expect(renderer.create(
    <Place {...fakeProps} />
  )).toMatchSnapshot()
})
