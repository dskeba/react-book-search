
import Config from 'AppConfig'

class BookService {
  static listVolumes (query, cb) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${Config.googleBooksApiKey}`
    fetch(url).then((response) => {
      response.json().then((json) => {
        cb(json)
      }).catch((error) => {
        console.log(error.stack)
        cb(null)
      })
    }).catch((error) => {
      console.log(error.stack)
      cb(null)
    })
  }
  static indexOfBook (books, book) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === book.id) {
        return i
      }
    }
    return -1
  }
}

export default BookService
