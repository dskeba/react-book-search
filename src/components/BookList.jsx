
import React from 'react'

import BookService from '../services/BookService'

import Book from './Book.jsx'

class BookList extends React.Component {
  render () {
    return (
      <div className='book-list'>
        {
          this.props.books.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                unsave={(BookService.indexOfBook(this.props.saved, book) > -1)}
                onSave={(book) => this.props.onSave(book)}
              />
            )
          })
        }
      </div>
    )
  }
}

BookList.propTypes = {
  books: React.PropTypes.array.isRequired,
  saved: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired
}

export default BookList
