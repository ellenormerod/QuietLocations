import { FlatList } from 'react-native';
import React from 'react';
import {Places} from '../places';
import { shallow } from 'enzyme';

describe('Places', () => {
  const places = {
    name: 'Great Bar',
    location: '123 W. Street Chicago, IL',
    noise: 2
  }
  const wrapper = shallow(<Places places={places} />)

  it('renders a list', () => {
    expect(wrapper.contains(<FlatList data={this.props.places} renderItem={() => {}} />))
  });
})

// it ('equals 5', () => {
//   expect(5).toEqual(7)
// })