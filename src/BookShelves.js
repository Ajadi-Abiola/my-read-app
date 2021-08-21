import React, { Component } from "react"
import BookShelf from "./BookShelf";
import Header from "./Header";
import SearchButton from "./SearchButton";

import * as BooksAPI from './BooksAPI'
class BookShelves extends React.Component{
    // state = {
    //     books:this.props.books
    // }
    // updateBook = (book, shelf) =>{
    //     BooksAPI.update(book,shelf)
    //     if (shelf === 'none') {
    //       this.setState(prevState => ({
    //         books: prevState.books.filter(b => b.id !== book.id)
    //       }));
    //     } else {
    //       book.shelf = shelf;
    //       this.setState(prevState => ({
    //         books: prevState.books.filter(b => b.id !== book.id).concat(book)
    //       }));
    //     }
    //   };

    render(){
        const books=  this.props.books
        console.log('books', books) 
        const currentlyReading = books.filter(book=>book.shelf === 'currentlyReading')
        const wantToRead= books.filter(book=>book.shelf === 'wantToRead')
        const read= books.filter(book=>book.shelf === 'read')
        return(
            <div>
                <div className="list-books-content">
                    <Header/>
              <div>
         {/* currentlyReading */}
          <BookShelf  onUpdate ={this.props.onUpdate} books={currentlyReading} shelfHeading ={"Currently Reading"}/> 
         
          
          
          {/* want to Read */}
          <BookShelf onUpdate ={this.props.onUpdate} books = {wantToRead}  shelfHeading ={"Want to Read"}/>
          {/* Read */}
          <BookShelf onUpdate ={this.props.onUpdate} books ={read} shelfHeading ={" Read"}/>
                
               </div>
               </div>
               <SearchButton/>

            </div>
        )
    }
}

export default BookShelves;
