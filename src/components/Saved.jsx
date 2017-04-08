
import React from 'react'

class Saved extends React.Component {
  render () {
    const listSaved = this.props.saved.map((book) => {
      return (
        <div>
          {book}
        </div>
      )
    })
    return (
      <div>
        <h2>Saved Books</h2>
        <p>
          Your saved books will be displayed here
        </p>
        <p>
          {listSaved}
        </p>
      </div>
    )
  }
}

Saved.propTypes = {
  saved: React.PropTypes.array.isRequired
}

export default Saved
