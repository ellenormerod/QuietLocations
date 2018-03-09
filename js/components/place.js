import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchReviews} from '../store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class Place extends Component {
  componentDidMount(){
    this.props.loadReviews(this.props.item.id)
  }

  render(){
  const {item, reviews} = this.props
    return (
      <View>
        <Text>
        {item.name}
        </Text>
      </View>
    )
  }
}

const mapState = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatch = dispatch => {
  return {
    loadReviews(id){
      dispatch(fetchReviews(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Place)
