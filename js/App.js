/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './components/Router';
import Places from './components/places'
import { TabNavigator } from 'react-navigation';
import {Provider} from 'react-redux';
import store from './store'

const QuietLocations = () => {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );

}


const App = TabNavigator({
  Home: {screen: Router},
  Place: {screen: props => <Places store={store} />}
})


AppRegistry.registerComponent('QuietLocations', () => App);
export default QuietLocations