import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import {List, ListItem} from 'react-native-elements'
import {fetchPlaces} from '../store'
import {connect} from 'react-redux'

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
  },
});

class Places extends Component {
  componentDidMount(){
    this.props.loadInitialData()
  }
  
  render(){
    const {places} = this.props
    console.log('places', places)
    return (
      <List>
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subtitle={item.location}
              />
          )}
          keyExtractor={item => item.name}
        />
      </List>
    )
  }
}

const mapState = state => {
  return {
    places: state.places
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData(){
      dispatch(fetchPlaces())
    }
  }
}

Places.navigationOptions = {
  title: 'Places'
}

export default connect(mapState, mapDispatch)(Places)