
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
      books: [],
      saved: []
    }
    console.log(`App is starting in ${Config.mode} mode...`)
    this.searchBooks = this.searchBooks.bind(this)
    this.onListVolumesDone = this.onListVolumesDone.bind(this)
    this.onSave = this.onSave.bind(this)
  }
  searchBooks (query) {
    BookService.listVolumes(query, this.onListVolumesDone)
  }
  onListVolumesDone (response) {
    this.setState({
      books: response.items,
      saved: this.state.saved
    })
  }
  onSave (book) {
    let newSaved = this.state.saved.slice()
    let savedIndex = BookService.indexOfBook(newSaved, book)
    if (savedIndex > -1) {
      newSaved.splice(savedIndex, 1)
    } else {
      newSaved = newSaved.concat([book])
    }
    this.setState({
      books: this.state.books,
      saved: newSaved
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
            <Search onSearch={this.searchBooks} books={this.state.books} saved={this.state.saved} onSave={(book) => this.onSave(book)} />
          )} />
          <Route path='/Saved' render={() => (
            <Saved saved={this.state.saved} onSave={(book) => this.onSave(book)} />
          )} />
        </div>
      </Router>
    )
  }
}

export default App
