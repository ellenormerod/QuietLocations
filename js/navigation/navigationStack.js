import {StackNavigator, TabNavigator} from 'react-navigation';
import Places from '../components/places'
import Place from '../components/place'
import Router from '../components/Router'

const PlaceStack = StackNavigator({
  Places: {screen: Places},
  Place: {screen: Place}
})

const navigator = TabNavigator({
  Home: {screen: Router},
  Places: {screen: PlaceStack}
})

export default navigator
