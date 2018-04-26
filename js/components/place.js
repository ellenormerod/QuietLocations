import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { ListItem, List, Card, Rating } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchReviews } from '../store'
import { Actions } from 'react-native-router-flux';


export class Place extends Component {
  componentDidMount() {
    this.props.loadReviews(this.props.item.id)
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

  render() {
    const { item, reviews } = this.props
    return (
       <View>
       <Card title={item.name}>
          <Text h3>
            {item.location}
          </Text>
          <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={+item.noise}
            readonly
            imageSize={30}
            // onFinishRating={review.noise}
            style={{ paddingVertical: 10 }}
          />
        </Card>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
         <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ListItem
                title={item.title}
                subtitle={item.comments}
                containerStyle={{ borderBottomWidth: 0 }}
                onPress={() => Actions.review({ item })}
              />
            )}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
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
    loadReviews(id) {
      dispatch(fetchReviews(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Place)
