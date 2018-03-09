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

  render(){
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
  return {
  }
}

const mapDispatch = dispatch => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Place)
