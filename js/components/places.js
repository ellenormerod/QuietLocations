import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { fetchPlaces } from '../store';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';

class Places extends Component {

  componentDidMount() {
    this.props.loadInitialData()
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE'
        }}
      />
    )
  }

  renderHeader = () => {
    return <SearchBar placeholder="Search here" lightTheme round />
  }


  render() {
    const { places } = this.props
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subtitle={item.location}
              containerStyle={{ borderBottomWidth: 0 }}
              onPress={() => Actions.place({item})}
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
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
    loadInitialData() {
      dispatch(fetchPlaces())
    }
  }
}


export default connect(mapState, mapDispatch)(Places)
