import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import BookShelves from './BookShelves'
import SearchButton from './SearchButton'
import {Route } from 'react-router-dom'

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
    bookSearch:[],
   
  }

// updateSearch = (state) =>
// {
//   console.log('here', this)
//   this.setState({showSearchPage: state})
// }

// const search = ()=>{
//   showSearchPage = this.state.showSearchPage(true)

// }
 restoreSearch =()=>{
   this.setState({bookSearch:[]})
 }
// componentDidMount(){
//   BooksAPI.getAll()
//     .then((books)=>{
//       this.setState(()=>({books}))
//     })
  
// }

fetchAllBooks() {
  BooksAPI.getAll().then((response) => {
    this.setState({ books: response });
  });
}

componentDidMount() {
  this.fetchAllBooks();
}

updateBook = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
    this.fetchAllBooks();
  });
};

  render() {
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
        
        <BookShelves books={this.state.books} OnUpdate={this.updateBook}/>)}
      />
        <Route
        path="/search"
        render={() => (

        <Search books={this.state.books}
        OnRestoreSearch = {this.restoreSearch}
    
        />
        )}/>
       
      </div>
    )
  }
}

export default BooksApp
