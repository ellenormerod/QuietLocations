import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Card, Rating} from 'react-native-elements'

const Review = (props) => {
  console.log('props', props)
  const { review } = props
  return (
    <View >
      <Card>
        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={review.noise}
          // readonly
          imageSize={20}
          // onFinishRating={review.noise}
          style={{ paddingVertical: 10 }}
        />
        <Text>{review.comments}</Text>
      </Card>
    </View>
  )
}

export default Review
