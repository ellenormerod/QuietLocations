import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

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

const Router = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Chicago-Skyline.jpg')} />
    </View>
  )
}

Router.navigationOptions = {
  title: 'Home'
}

export default Router
