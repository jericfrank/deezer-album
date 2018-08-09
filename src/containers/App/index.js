import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import AlbumList from '../AlbumList';

export default class App extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header label="Deezer" />
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
};
