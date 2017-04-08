
import React from 'react'
import Book from './Book.jsx'

class BookList extends React.Component {
  render () {
    this.listBooks = this.props.books.map((book) => {
      return (
        <Book
          key={book.id}
          book={book}
          unsave={(this.props.saved.indexOf(book) > -1)}
          onSave={(book) => this.props.onSave(book)}
        />
      )
    })
    return (
      <div className='book-list'>
        { this.listBooks }
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
