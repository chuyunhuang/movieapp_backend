const express = require('express');
const genreRouter = express.Router();
const genreService = require('../services/genreService');

//Get all genres
genreRouter.get('/', (req, res)=>{

  genreService.getAll()
  .then((data)=>{
    res.status(202)
    res.json(data)
  })
  .catch((err)=>{
    res.status(404)
    res.json(err)
  })
})


module.exports = genreRouter;