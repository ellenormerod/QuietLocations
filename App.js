import React from 'react';
import {
  Text,
} from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './js/store';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from './js/components/home';
import Places from './js/components/places';
import Place from './js/components/place';

const TabIcon = ({title}) => {
  return (
    <Text style={{color: 'black'}}>{title}</Text>
  )
}

const Scenes = Actions.create(<Scene key="root">
  <Scene key="tabbar" tabs icon={TabIcon}>
    <Scene key="first" title="Home">
      <Scene
        key="home"
        component={Home}
        initial
      />
    </Scene>
    <Scene key="second" title="Places">
      <Scene
        key="places"
        component={Places}
      />
      <Scene
        key="place"
        component={Place}
      />
    </Scene>
  </Scene>
</Scene>)

const ConnectedRouter = connect()(Router)

const QuietLocations = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter scenes={Scenes}/>
    </Provider>
  );

}


export default QuietLocations
