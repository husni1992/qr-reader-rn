import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

let scanner;
export class ScanScreen extends Component {
    state = {
        data: "test"
    }

    onSuccess = e => {
        this.setState({ data: e.data });
        setTimeout(() => {
            scanner.reactivate();
        })
    };

    render() {
        return (
            <QRCodeScanner
                ref={(node) => { scanner = node }}
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
                }
                bottomContent={
                    <Text>{this.state.data}</Text>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
