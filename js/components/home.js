import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../Chicago-Skyline.jpg')} />
      </View>
    )
  }
}

const mapState = state => {
  // console.log('state', state)
  return {

  }
}

export default connect(mapState)(Home)
