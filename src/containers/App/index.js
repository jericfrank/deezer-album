import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import AlbumList from '../AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header label="Albums" />
        <AlbumList />
      </View>
    );
  }
}
