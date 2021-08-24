import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import BookShelves from './BookShelves'

import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    book: '',
    bookSearch: [],
    isLoading: false

  }

  updateSearchQuery = (query) => {
    if (!query) {
      this.setState(() => ({
        bookSearch: []
      }));
    }
    BooksAPI.search(query).then(response => {
      this.setState(() => ({
        bookSearch: response
      }))
    })

  }


  restoreSearch = () => {
    this.setState({ bookSearch: [] })
  }


  fetchAllBooks() {
    BooksAPI.getAll().then((response) => {

      this.setState({ books: response, isLoading: false });
    });
  }
  fetchBookById(bookId) {
    BooksAPI.get(bookId).then((response) => {
      this.setState({ book: response })

    })
  }

  componentDidMount() {
    this.fetchAllBooks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading !== prevState.isLoading) {
      this.fetchAllBooks()
    }

  }


  updateBook = (book, shelf) => {

    BooksAPI.update(book, shelf).then(() => {
      this.setState({ isLoading: true })
    });
  };

  render() {
    const book = this.props.book;
    return (

      <div className="app">
        {/* {this.state.showSearchPage ? ( */}

        {/* ) : ( */}
        <div className="list-books">
        </div>
        )
        <Route
          exact path="/"
          render={() => (

            <BookShelves fetchBookById={this.fetchBookById} book={book} books={this.state.books} updateBook={this.updateBook}  OnRestoreSearch={this.restoreSearch} />)}
        />
        <Route
          path="/search"
          render={() => (

            <Search books={this.state.bookSearch}
              OnRestoreSearch={this.restoreSearch}
              updateBook={this.updateBook}
              updateSearchQuery={this.updateSearchQuery}


            />
          )} />

      </div>
    )
  }
}

export default BooksApp
