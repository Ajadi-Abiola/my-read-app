import React, { Component } from "react"

class BookShelf extends React.Component {
  state ={
    value: this.props.book
  }
  
  handleBookChange = (event, book) => {
    const { value } = event.target;
    this.props.updateBook(book,value);
  };
    render()
    {
      const theBookshelf= this.props.books;
        console.log('the books', theBookshelf)
        return(
          <div>
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfHeading}</h2>
                  <div className="bookshelf-books">
                    
                    <ol className="books-grid">
                      
                      {theBookshelf.map((book)  => (<li key = {book.id}>
                        
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}></div>
                            <div className="book-shelf-changer">
                              <select value = {book.shelf} onChange={(event)=>this.handleBookChange (event,book)}>
                                
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors"> {book.authors}</div>
                        </div>
                      </li>)

                        )}
                     
                     
                    </ol>
                  </div>
                </div>
                </div>
        )
    }
}

export default BookShelf;