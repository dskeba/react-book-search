
import React from 'react'

import Book from './Book.jsx'

class Saved extends React.Component {
  render () {
    return (
      <div className='book-list'>
        <h2>Saved Books</h2>
        <p>
          Your saved books will be displayed here
        </p>
        <div>
          {this.props.saved.map((book) => {
            return (
              <Book key={book.id} book={book} unsave onSave={(book) => this.props.onSave(book)} />
            )
          })}
        </div>
      </div>
    )
  }
}

Saved.propTypes = {
  saved: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired
}

export default Saved
