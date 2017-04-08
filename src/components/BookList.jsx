
import React from 'react'
import Book from './Book.jsx'

class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
  }
  render () {
    this.listBooks = this.props.books.map((book) => {
      return (
        <Book key={book.id} title={book.title} thumbnail={book.thumbnail} onSave={(book) => this.props.onSave(book)} />
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
  onSave: React.PropTypes.func.isRequired
}

export default BookList
