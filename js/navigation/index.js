import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import NavigationStack from './navigationStack'

class AppNavigation extends Component {
  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    dispatch(NavigationActions.back())
    return true
  }

  render(){
    const {navigationState, dispatch} = this.props;
    return (
      <NavigationStack navigation={addNavigationHelpers({dispatch, state})}/>
    )
  }
}

const mapState = state => {
  return {
    navigationState: state.NavigationReducer
  }
}

export default connect(mapState)(AppNavigation)