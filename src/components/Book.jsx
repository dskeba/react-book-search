
import React from 'react'

class Book extends React.Component {
  render () {
    const thumbnail = this.props.book.volumeInfo.imageLinks ? this.props.book.volumeInfo.imageLinks.thumbnail : ''
    return (
      <div className='book-card'>
        <div>
          <h3>{ this.props.book.volumeInfo.title }</h3>
          <div><img src={thumbnail} /></div>
          <br />
          <button onClick={() => this.props.onSave(this.props.book)}>
            <i className='fa fa-save' /> {this.props.unsave ? 'Unsave' : 'Save'}
          </button>
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  book: React.PropTypes.object.isRequired,
  unsave: React.PropTypes.bool.isRequired,
  onSave: React.PropTypes.func.isRequired
}

export default Book
