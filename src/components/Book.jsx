
import React from 'react'

class Book extends React.Component {
  render () {
    return (
      <div className='book-card'>
        <div>
          <h3>{ this.props.title }</h3>
          <div><img src={this.props.thumbnail} /></div>
          <button onClick={() => this.props.onSave(this.props.title)}>Save</button>
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.string,
  onSave: React.PropTypes.func.isRequired
}

export default Book
