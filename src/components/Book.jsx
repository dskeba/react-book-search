
import React from 'react'

class Book extends React.Component {
  render () {
    return (
      <div className='book-card'>
        <div>
          <h3>{ this.props.book.volumeInfo.title }</h3>
          <div><img src={this.props.book.volumeInfo.imageLinks.thumbnail} /></div>
          <br />
          <button onClick={() => this.props.onSave(this.props.book)}>Save</button>
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  book: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired
}

export default Book
