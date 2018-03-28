import 'react-native';
import React from 'react';
import Home from '../home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Home />
    );
    expect(tree).toMatchSnapshot()
  });
})
