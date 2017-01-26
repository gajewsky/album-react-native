import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import BookList from './src/components/BookList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header text={'Books'} />
    <BookList />
  </View>
);

AppRegistry.registerComponent('album', () => App);
