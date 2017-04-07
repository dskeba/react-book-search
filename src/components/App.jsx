
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Config from 'AppConfig'

import BookService from '../services/BookService'

import Search from './Search.jsx'
import Saved from './Saved.jsx'

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
      <Router>
        <div>
          <div>
            <h1>
              <i className='fa fa-book' /> React Book Search
            </h1>
          </div>
          <hr />
          <div>
            <Link to='/'>Search</Link>
          </div>
          <div>
            <Link to='Saved'>Saved</Link>
          </div>
          <hr />
          <Route exact path='/' render={() => (
            <Search onSearch={this.searchBooks} books={this.state.books} />
          )} />
          <Route path='/Saved' render={() => (
            <Saved />
          )} />
        </div>
      </Router>
    )
  }
}

export default App
