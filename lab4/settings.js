import React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import WeatherProject from './weather_project';

export default class Settings extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          text: '',
      };
  }
  static navigationOptions = {
    title: "settings"
  };

  render() {

    return (
        <View>
            <View>
                <Button title="F"></Button>
            </View>
            <View>
            <Button onPress={
              () => {
                this.props.navigation.navigate('Home'); this._getForecastForCoords2;
              }
            } title="C"></Button>
            </View>
            <View>
                <Button title=" Backgrounds"></Button>
            </View>
            <View>
                <TextInput onChangeText={(text) => this.setState({text})} placeholder=" s">
                </TextInput>
            </View>
        </View>
      );

   }
}
