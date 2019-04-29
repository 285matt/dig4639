import React from 'react';
import { Button, TouchableHighlight, Image, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import WeatherProject from './weather_project';


class HomeScreen extends React.Component {
  static navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#444',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

  render() {
    return (
      <View style={{flex:1}}>
        <TouchableHighlight style={{alignItems:'center'}} onPress={() => {
          this.props.navigation.navigate('Details', {
            itemId: 86
          });
        }}>
          <Image source={require('./assets/settings.png')} />
        </TouchableHighlight>
        <WeatherProject />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Text>Settings will go here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
