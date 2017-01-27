import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import BookList from './components/BookList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header text={'Books'} />
    <BookList />
  </View>
);

export default App;
