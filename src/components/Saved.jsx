
import React from 'react'

class Saved extends React.Component {
  render () {
    return (
      <div>
        <h2>Saved Books</h2>
        <p>
          Your saved books will be displayed here
        </p>
        <div>
          {this.props.saved.map((book) => {
            return (
              <div key={book.id}>
                {book.volumeInfo.title}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Saved.propTypes = {
  saved: React.PropTypes.array.isRequired
}

export default Saved
