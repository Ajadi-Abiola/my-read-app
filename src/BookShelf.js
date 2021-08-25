import React from "react"

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      value: "none",
    }
  }
  handleBookChange = (event, book) => {
    const { value } = event.target;
    this.props.updateBook(book,value);
  };

  getCurrentShelf = (curBook) => {
    const { sortedBooks } = this.props;
    if (sortedBooks && curBook) {
      const curShelf = sortedBooks.find(book => book.id === curBook.id);
      return (curShelf && curShelf.shelf) || curBook.shelf || 'none';
    }
    return curBook.shelf || 'none'
  }

  render()
  {
    const theBookshelf= this.props.books;
      return(
        <div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {theBookshelf.map((book)  => (<li key = {book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}></div>
                    <div className="book-shelf-changer">
                      <select value = { book && this.getCurrentShelf(book) } onChange={(event)=>this.handleBookChange (event,book)}>
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
      )
  }
}

export default BookShelf;