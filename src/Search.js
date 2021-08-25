import React from "react"
import{Link} from 'react-router-dom'
import BookShelf from "./BookShelf"

class Search extends React.Component{
  state={
    query:''
  }

 handleSearch = (event)=>{
  this.props.updateSearchQuery(event.target.value);
  this.setState({query:event.target.value});
 }
    render(){
      const myBooks = this.props.books

        return(
        <div>
             <div className="search-books">
                <div className="search-books-bar">
                     <Link to="/">
                         <button className="close-search" >Close</button></Link>
                    <div className="search-books-input-wrapper">
                            {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
                          <input value={this.state.query} onChange={this.handleSearch} type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
              <div className="search-books-results">
                      {
                     (myBooks && myBooks.error) ? 
                    <h2>
                    {myBooks.error === 'empty query' ? 'Books not found' : myBooks.error}
                    </h2> :
                        <BookShelf books={this.props.books ? this.props.books :[]} updateBook={this.props.updateBook} sortedBooks={ this.props.sortedBooks } />
                    }
              </div>
            </div>

       </div>
        )
    }
}

export default Search;