import React from "react"
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <BookShelf fetchBookById ={this.fetchBookById}  book={book} updateBook ={updateBook} books={currentlyReading} shelfHeading ={"Currently Reading"}/> 
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>   
                        <BookShelf fetchBookById ={this.fetchBookById}  book={book}  updateBook ={updateBook} books = {wantToRead}  shelfHeading ={"Want to Read"}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2> 
                        <BookShelf  book={book}  updateBook ={updateBook} books ={read} shelfHeading ={" Read"}/>
                </div>
                </div>
            </div>
               <SearchButton/>
        </div>
        )
    }
}

export default BookShelves;