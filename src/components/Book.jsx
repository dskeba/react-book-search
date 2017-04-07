
import React from 'react'

class Book extends React.Component {
  render () {
    return (
      <div className='book-card'>
        <h1>{ this.props.title }</h1>
        <div><img src={this.props.thumbnail} /></div>
      </div>
    )
  }
}

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.string
}

export default Book
