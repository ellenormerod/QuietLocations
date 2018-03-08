import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class Place extends Component {
  static navigationOptions = {
    title: 'Place'
  }

  render(){
    console.log('this.props', this.props)
    return (
      <View>
        <Text>
        Hey
        </Text>
      </View>
    )
  }
}

const mapState = state => {
  console.log('state', state)
  return {
    places: state.places
  }
}

const mapDispatch = dispatch => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Place)