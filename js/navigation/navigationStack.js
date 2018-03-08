import {StackNavigator, TabNavigator} from 'react-navigation';

import Places from '../components/places'
import Place from '../components/place'
import Router from '../components/Router'

// const Tabs = TabNavigator({
//   Home: {screen: Router},
//   Place: {screen: Places}
// })

// const navigator = StackNavigator({
//   place: {
//     screen: Place
//   },
//   screen1: {
//     screen: Tabs
//   }
// })


const PlaceStack = StackNavigator({
  Places : {screen: Places},
  Place : {screen: Place}
})

// const HomeStack = StackNavigator({
//   Home: { screen: Router },
//   Places: {screen: Places}
// })

const navigator = TabNavigator({
  Home: {screen: Router},
  Places: {screen: PlaceStack}
})


export default navigator
