import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class BookList extends Component {
  state = { books: [] };

  componentWillMount() {
    axios.get('http://www.mocky.io/v2/588a01fc2500003a1aadcf97')
      .then(response => this.setState({ books: response.data }));
  }

  renderBooks() {
    return this.state.books.map(book =>
      <Text key={book.title}>{book.title}</ Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderBooks()}
      </View>
    );
  }
}

export default BookList;
