import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const BookDetail = ({ book }) => {
  const { title, author, cover, image, url } = book;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    imageContainerStyle,
    coverContainerStyle,
    coverStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{author}</Text>
        </View>
      </CardSection>
      <CardSection style={coverContainerStyle}>
        <Image
          style={coverStyle}
          source={{ uri: cover }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  coverContainerStyle: {
    alignSelf: 'center'
  },
  coverStyle: {
    height: 300,
    width: 300 * 0.78
  }
};


export default BookDetail;
