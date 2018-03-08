import React from 'react';
import Router from './js/components/Router'
import { Platform, StyleSheet, Text, View } from "react-native";
// import AppNavigation from './js/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';

const { store, persistor } = configureStore()

const QuietLocations = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );

}


export default QuietLocations
