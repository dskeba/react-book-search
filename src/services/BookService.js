
import Config from 'AppConfig'

class BookService {
  listVolumes (query, cb) {
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
}

export default BookService
