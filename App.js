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
import Review from './js/components/review';
import NewReview from './js/components/newreview';

const TabIcon = ({ title }) => {
  return (
    <Text style={{ color: 'black' }}>{title}</Text>
  )
}

const styles = {
  navBar: {

  },
  title: {

  }
}

const Scenes = Actions.create(<Scene key="root">
  <Scene key="tabbar" tabs icon={TabIcon} showLabel={false}>
    <Scene key="first" title="Home">
      <Scene
        key="home"
        component={Home}
        initial
        hideNavBar={true}
      />
    </Scene>
    <Scene key="second" title="Places">
      <Scene
        key="places"
        component={Places}
        hideNavBar={true}
      />
      <Scene
        key="place"
        component={Place}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.title}
        onRight={() => Actions.newreview()}
        rightTitle="Add Review"
      />
      <Scene
        key="review"
        component={Review}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.title}
      />
      <Scene
        key="newreview"
        component={NewReview}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.title}
      />
    </Scene>
  </Scene>
</Scene>)

const ConnectedRouter = connect()(Router)

const QuietLocations = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter scenes={Scenes} />
    </Provider>
  );

}


export default QuietLocations
