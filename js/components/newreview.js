'use strict';
let React = require('react');
let t = require('tcomb-form-native');
let { StyleSheet, Text, View, TouchableHighlight } = require('react-native');

let Form = t.form.Form;
// here we are: define your domain model
let Person = t.struct({
    name: t.String,              // a required string
    surname: t.maybe(t.String),  // an optional string
    age: t.Number,               // a required number
    rememberMe: t.Boolean        // a boolean
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

const ReviewForm = ({

  onPress: function () {
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

const NewReview = () => {
    return ReviewForm
}

export default NewReview;
