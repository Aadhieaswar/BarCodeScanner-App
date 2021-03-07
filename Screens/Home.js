import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {

  goToScanner = () => {
    this.props.navigation.push('Scanner');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome! Click below to start </Text>
        <Button onPress={() => this.goToScanner()} title="Start my nutritional journey"/>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  }
});
