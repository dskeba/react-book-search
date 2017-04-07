
import React from 'react'

import Config from 'AppConfig'

import BookService from '../services/BookService'

import BookList from './BookList.jsx'
import SearchBox from './SearchBox.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
    console.log(`App is starting in ${Config.mode} mode...`)
    this.searchBooks = this.searchBooks.bind(this)
    this.onListVolumesDone = this.onListVolumesDone.bind(this)
  }
  searchBooks (query) {
    const bookService = new BookService()
    bookService.listVolumes(query, this.onListVolumesDone)
  }
  onListVolumesDone (response) {
    let i = 0
    const bookItems = response.items.map((item) => {
      i += 1
      let tb = ''
      if (item.volumeInfo.imageLinks) {
        tb = item.volumeInfo.imageLinks.thumbnail
      }
      return {
        id: i,
        title: item.volumeInfo.title,
        thumbnail: tb
      }
    })
    this.setState({
      books: bookItems
    })
  }
  render () {
    return (
      <div>
        <h1><i className='fa fa-book' /> React Book Search</h1>
        <SearchBox onSearch={this.searchBooks} />
        <hr />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default App
