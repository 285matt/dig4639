import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {state: '', state_Name: '', state_Error: ''};
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    testy = event;
  }


  validate() {
    let state_Name = '';
    let state_Error = '';

    if (!testy.match(/^[a-zA-Z\s]+$/)) {
        state_Error='Bad User. Invalid Name CHOSEN';
    }
    else if (testy.match(/^[a-zA-Z\s]+$/)){
        state_Name="Hi User! your name is " + testy;
    }
    if (state_Error) {
        this.setState({state_Error});
        return false;
    }
    else if (state_Name) {
        this.setState({state_Name});
        return false;
    }
    return true;
  }

  onPress() {
    console.log("Pressed");
  }
  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
