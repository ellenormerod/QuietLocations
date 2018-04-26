import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Card, Rating} from 'react-native-elements'

const Review = (props) => {
  const { item } = props
  return (
    <View >
      <Card>
        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={item.noise}
          // readonly
          imageSize={20}
          // onFinishRating={item.noise}
          style={{ paddingVertical: 10 }}
        />
        <Text>{item.comments}</Text>
      </Card>
    </View>
  )
}

export default Review
