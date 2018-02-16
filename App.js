import React, { Component } from 'react';
import Router from './js/components/Router';
import {Provider} from 'react-redux';
import configureStore from './store'

const {store} = configureStore()

const QuietLocations = () => {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );

}

export default QuietLocations
