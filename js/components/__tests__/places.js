import React from 'react';
import { Places } from '../places';
import renderer from 'react-test-renderer';

const fakeProps = {
  places: {
    name: 'McDonalds',
    location: '145 W Cool Street St. Chicago, IL',
    noise: 3
  },
  loadInitialData: () => { }
}


it('renders Places using Snapshot', () => {
  expect(renderer.create(
    <Places {...fakeProps} />
  )).toMatchSnapshot()
})
