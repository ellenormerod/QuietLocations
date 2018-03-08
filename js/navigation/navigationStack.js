import {StackNavigator, TabNavigator} from 'react-navigation';

import Places from '../components/places'
import Place from '../components/place'
import Router from '../components/Router'

const Tabs = TabNavigator({
  Home: {screen: Router},
  Place: {screen: Places}
})

const navigator = StackNavigator({
  place: {
    screen: Place
  },
  screen1: {
    screen: Tabs
  }
})


export default navigator
