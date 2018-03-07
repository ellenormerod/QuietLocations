import React from 'react';
import AppNavigation from './js/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';

const { store, persistor } = configureStore()

const QuietLocations = () => {
  console.log('hit here first?')
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );

}

export default QuietLocations
