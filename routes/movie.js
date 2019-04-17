const express = require('express');
const movieRouter = express.Router();
const movieService = require('../services/movieService');

//Get all movies
movieRouter.get('/', (req, res)=>{

  movieService.getAll()
  .then((data)=>{
    res.json(data)
  })
  .catch((err)=>{
    console.log(err)
  })
})


//Get Search Result by passing query
// movieRouter.get('/:search', (req, res)=>{
//   const {search}= req.params

//   movieService.searchByTitle(search)
//   .then((data)=>{
//     res.json(data)
//   })
//   .catch((err)=>{
//     res.json(err)
//   })
// })

//Get single movie by passing id
movieRouter.get('/:movieId', (req, res)=>{
  console.log('BACKEND', req.params)
  const {movieId} = req.params

  movieService.getSingleMovie(movieId)
  .then((data)=>{
    console.log('route was hit', data)
    res.json(data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

movieRouter.get('/genre/:genreId', (req, res)=>{
  const {genreId} = req.params

  movieService.getMovieByGenre(genreId)
  .then((data)=>{
    res.json(data)
  })
  .catch((err)=>{
    res.json(err)
  })
})

module.exports = movieRouter;