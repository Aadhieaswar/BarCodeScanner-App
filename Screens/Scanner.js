import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// store the camera object
let camera;

export default class Scanner extends Component {
    constructor() {
        super();
        this.state = {
          hasPermission: null,
          scanned: false,
        }
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState(prevState => ({ scanned: true }))
        alert(`Scanned item of type ${type} and data ${data}!`);
    }

    async componentDidMount() {
        // const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState(prevState => ({ hasPermission: status === 'granted' }));
    }
  
    render() {
        let viewContent;
        if (!this.state.hasPermission) {
            viewContent = (<Text style={styles.display}>The app doesn't have permission for the camera</Text>);
        } else {
            viewContent = (<BarCodeScanner 
                style={StyleSheet.absoluteFillObject} 
                onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned } />);
        }
        return (
            <View style={styles.display}>
                { viewContent }
                { this.state.scanned &&
                <View style={styles.btnContainer}>
                    <Button title='Scan Again' 
                      onPress={() => this.setState(prevstate => ({scanned: false}))} />
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        width: '100%'
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#f1f1f1',
        padding: 5
    }
})