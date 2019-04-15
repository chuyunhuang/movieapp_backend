const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Routes
const movieRouter = require('./routes/movie');

//Middleware
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/testing', (req, res)=>{
  res.json('express app working!')
})

app.use('/movie', movieRouter)

app.listen(4200, ()=>{
  console.log(`app is listening at port 4200`)
})