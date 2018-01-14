/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import scenes from './sceens';
import { Router } from 'react-native-router-flux';


export default class App extends Component {
  lockBackButton = () => true
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router
          scenes={scenes}
          onBackAndroid={this.lockBackButton}
          backAndroidHandler={this.lockBackButton}
        />
      </View>
    );
  }
}
