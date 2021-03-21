import React, { Component } from 'react';
import { Text } from 'react-native';

export default class InfoRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={this.props.style}>{`${this.props.title}: ${this.props.value}`}</Text>
    );
  }
}
