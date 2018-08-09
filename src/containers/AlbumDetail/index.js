import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import Button from '../../components/Button';

const AlbumDetail = ({ album: { title, artist, cover_xl } }) => {
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: artist.picture_medium }}
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
          source={{ uri: cover_xl }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(artist.link)}>
          Play Now
        </Button>
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
