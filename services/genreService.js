const db = require('./dbConnect')

const genreService = {}

genreService.getAll = () =>{
  return db.any('SELECT * FROM genres')
}

module.exports = genreService;