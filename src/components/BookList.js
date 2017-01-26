import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import BookDetail from './BookDetail';

class BookList extends Component {
  state = { books: [] };

  componentWillMount() {
    axios.get('http://www.mocky.io/v2/588a48743000005d03fa8be1')
      .then(response => this.setState({ books: response.data }));
  }

  renderBooks() {
    return this.state.books.map(book =>
      <BookDetail key={book.title} book={book} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderBooks()}
      </ScrollView>
    );
  }
}

export default BookList;
