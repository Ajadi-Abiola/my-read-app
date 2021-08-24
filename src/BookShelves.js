import React, { Component } from "react"
import BookShelf from "./BookShelf";
import Header from "./Header";
import SearchButton from "./SearchButton";


class BookShelves extends React.Component{
    
    render(){
        const book = this.props.book;
        const updateBook = this.props.updateBook;
        const books=  this.props.books
      
        const currentlyReading = books.filter(book=>book.shelf === 'currentlyReading')
        const wantToRead= books.filter(book=>book.shelf === 'wantToRead')
        const read= books.filter(book=>book.shelf === 'read')
        return(
        <div>
            <div className="list-books-content">
                    <Header/>
                <div>
                    { /* currentlyReading */}
                        <BookShelf fetchBookById ={this.fetchBookById}  book={book} updateBook ={updateBook} books={currentlyReading} shelfHeading ={"Currently Reading"}/> 
                    {/* want to Read */}
                        <BookShelf fetchBookById ={this.fetchBookById}  book={book}  updateBook ={updateBook} books = {wantToRead}  shelfHeading ={"Want to Read"}/>
                    {/* Read */}
                        <BookShelf  book={book}  updateBook ={updateBook} books ={read} shelfHeading ={" Read"}/>
                
                </div>
            </div>
               <SearchButton/>
        </div>
        )
    }
}

export default BookShelves;
