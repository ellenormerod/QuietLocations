import React from 'react';
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
  }
});

const Home = () => {
    return (
      <View style={styles.container}>
        <Image source={require('../Chicago-Skyline.jpg')} />
      </View>
    )
}

export default Home;
