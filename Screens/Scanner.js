import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import APIReq from '../API/ApiCalls';

export default class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
      scanned: false,
    }
  }

  handleBarCodeScanned = ({ data }) => {
    this.setState(() => ({ scanned: true }))
    APIReq(data)
      .then(res => {
        const itemName = `${res['brand_name']} ${res['item_name']}`;
        this.props.navigation.push('ItemInfo', { res: res, itemName: itemName });
        console.log(res);
        console.log(itemName);
      }).catch(err => alert(err));
  }

  async componentDidMount() {
    const {status} = await BarCodeScanner.requestPermissionsAsync();
    this.setState(() => ({ hasPermission: status === 'granted' }));
  }

  render() {
    let viewContent;
    if (!this.state.hasPermission) {
      viewContent = (<Text style={styles.permissionText}>The app doesn't have permission for the camera</Text>);
    } else {
      viewContent = (<BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned} />);
    }
    return (
      <View style={styles.display}>
        { viewContent }
        { this.state.scanned &&
        <View style={styles.btnContainer}>
          <Button title='Scan Again'
            onPress={() => this.setState(() => ({scanned: false}))} />
        </View> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f1f1f1',
    padding: 5
  },
  permissionText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30
  }
});
