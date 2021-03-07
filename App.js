import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import Home from './Screens/Home';
import Scanner from './Screens/Scanner';

// get the stack navigator
const stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        <stack.Navigator initialRouteName={ Home }>
          <stack.Screen name="Home" component={ Home } />
          <stack.Screen name="Scanner" component={ Scanner } />
        </stack.Navigator>
      </NavigationContainer>
    )
  }
}
