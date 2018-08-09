import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from '../AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios.get('https://api.deezer.com/chart/0').then(({ data }) => this.setState({ albums: data.albums.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album} />);
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
