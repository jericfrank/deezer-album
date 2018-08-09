import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import CardSection from '../../components/CardSection';

const AlbumDetail = ({ album: { title, artist, cover_medium } }) => {
  const { headerContentStyle, headerTextStyle, thumbnailContainerStyle, thumbnailStyle, imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: artist.picture_small }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist.name}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: cover_medium }}
        />
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
