import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: null, valid: false, submit: false};

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChange(event) {
    this.setState({name: event});
    var regex = /^[a-zA-Z]+$/;
      if (regex.test(this.state.name)) {
        this.setState({valid: true});
      } else {
        this.setState({valid: false});
      }
  }

  onPress(event) {
    this.setState({submit: true});

    console.log(this.state.name);
    console.log(this.state.valid);

    event.preventDefault();
  }

   render() {
     const isValid = this.state.valid;
     const submit = this.state.submit;
     let message;
     let form;

     if (submit) {
       form =<Text style={styles.buttonText}> </Text>;
     } else {
       form = (
         <View>
          <TextInput style={styles.textInput} placeholder="Enter Your Name" onChangeText={value => this.onChange(value)} value={this.state.name}></TextInput>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        </View>
       );
     }

     if (submit) {
       form = <Text></Text>;
     }

     if (submit && isValid) {
       message =<Text style={styles.defaultText}>Congratulations. You are beautiful and valid, </Text>;
     } else if (isValid && !submit) {
       message =<Text style={styles.defaultText}>Looking good, </Text>;
     } else if (!isValid && submit) {
       message =<Text style={styles.invalidText}>I'm sorry. You are invalid. Only letters please! No numbers. You entered:</Text>;
     } else {
       message =<Text style={styles.defaultText}>Only letters please! </Text>;
     }

     return (
       <View style={styles.container} flexDirection='column' alignItems='stretch'>{form}{message}<Text style={styles.defaultText}>{this.state.name}</Text></View>
     );
   }
 };


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
  invalidText:
  {
    fontSize:20,
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
