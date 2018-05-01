'use strict';
import { submitReviews } from '../store';
import { connect } from 'react-redux';
let React = require('react');
let t = require('tcomb-form-native');
let { StyleSheet, Text, View, TouchableHighlight } = require('react-native');

let Form = t.form.Form;
const Noise = t.enums({
  1: '1 star-too loud',
  2: '2 star-loud',
  3: '3 star-perfect',
  4: '4 star-quiet',
  5: '5 star-too quiet'
});

// here we are: define your domain model
let Review = t.struct({
    title: t.String,              // a required string
    comments: t.String,  // an optional string
    noise: Noise,               // a required number
  });
let options = {}; // optional rendering options (see documentation)

let styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });

class NewReview extends React.Component {
  constructor(props){
    super(props);
    this.onPress = this.onPress.bind(this)
  }
  onPress() {
    // call getValue() to get the values of the form
    // console.log('this', this)
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      const obj = {title: value.title, comments: value.comments, noise: value.noise, placeId: this.props.place}
      this.props.sendReview(obj); // value here is an instance of Person
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form" // assign a ref
          type={Review}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapState = state => {
  console.log('state', state)
  return {
    place: state.reviews[0].placeId
  }
}

const mapDispatch = dispatch => {
  return {
    sendReview(val){
      dispatch(submitReviews(val))
    }
  }
}


export default connect(mapState, mapDispatch)(NewReview);
