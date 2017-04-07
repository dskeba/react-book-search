
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
        <BookList books={this.props.books} />
      </div>
    )
  }
}

Search.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
  books: React.PropTypes.array.isRequired
}

export default Search
