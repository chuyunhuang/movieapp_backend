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
movieRouter.get('/:search', (req, res)=>{
  const {search}= req.params
  console.log('BACKEND!!', req.params)

  movieService.searchByTitle(search)
  .then((data)=>{
    console.log('route was hit', data)
    res.json(data)
  })
  .catch((err)=>{
    console.log('error here', err)
  })
})

module.exports = movieRouter;