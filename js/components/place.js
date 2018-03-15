import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Card, Rating } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchReviews } from '../store'
import Review from './review'


class Place extends Component {
  componentDidMount() {
    this.props.loadReviews(this.props.item.id)
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
            // readonly
            imageSize={30}
            // onFinishRating={review.noise}
            style={{ paddingVertical: 10 }}
          />
        </Card>
        {reviews.map(review => <Review key={review.id} review={review} />)}
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
