const db = require('./dbConnect');
const movieService = {};

//Get all movies
movieService.getAll = () =>{
  return db.any(`SELECT * FROM movies 
	JOIN genres ON movies.genre_id = genres.id
	JOIN ratings ON movies.id = ratings.movie_id`)
}

movieService.getTitle = () =>{
  return db.any('SELECT title FROM movies')
}

movieService.searchByTitle =(search) =>{
  console.log('heyyy')
  const name = `%${search}%`
  const sql = `SELECT * FROM movies 
    JOIN genres ON movies.genre_id = genres.id 
      JOIN ratings ON movies.id = ratings.movie_id 
        WHERE Lower(movies.title) LIKE $[name]`
  return db.any(sql, {name})
  
}


module.exports = movieService;