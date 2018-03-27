import 'react-native';
import React from 'react';
import Home from '../home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders correctly', () => {
    renderer.create(
      <Home />
    );
  });
})
