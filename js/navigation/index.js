import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import NavigationStack from './navigationStack'

class AppNavigation extends Component {
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    if (navigationState.stateForLoggedIn.index <= 1) {
      BackHandler.exitApp();
      return;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render(){
    const {navigationState, dispatch, isLoggedIn} = this.props;
    const state = isLoggedIn ? navigationState.stateForLoggedIn : navigationState.stateForLoggedOut
    return (
      <NavigationStack navigation={addNavigationHelpers({dispatch, state})} />
    )
  }
}

const mapState = state => {
  console.log('state', state)
  return {
    isLoggedIn: state.login.isLoggedIn,
    navigationState: state.navigation
  }
}

export default connect(mapState)(AppNavigation)
