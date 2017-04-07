
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
        <Book key={book.id} title={book.title} thumbnail={book.thumbnail} />
      )
    })
    return (
      <div>
        { this.listBooks }
      </div>
    )
  }
}

BookList.propTypes = {
  books: React.PropTypes.array.isRequired
}

export default BookList
