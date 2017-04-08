
import React from 'react'

import SearchBox from './SearchBox.jsx'
import BookList from './BookList.jsx'

class Search extends React.Component {
  render () {
    return (
      <div>
        <h2>Search Books</h2>
        <SearchBox onSearch={this.props.onSearch} />
        <br />
        <BookList books={this.props.books} saved={this.props.saved} onSave={(book) => this.props.onSave(book)} />
      </div>
    )
  }
}

Search.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
  books: React.PropTypes.array.isRequired,
  saved: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired
}

export default Search
