require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const data = require('./data.js');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
//fgdf
app.use(function validateBearerToken(req, res, next) {
  const API_KEY = process.env.API_KEY;
  // console.log(req.get("Authorization")
  // move to next middleware
  const authVal = req.get('Authorization') || '';
  if (!authVal.startsWith('Bearer ')) {
    return res.status(401).json({message: 'Bearer auth header missing'})
    
  }
const token = authVal.split(' ')[1]
  if (token !== API_KEY) {
  return res.status(401).json({ message: 'Invalid credentials' });
}
// console.log(req.get('Authorization'))
next()
})

app.get('/movie', (req, res) => {
let movieData = [...data];

  let { genre, country, avg_vote } = req.query;
  if (genre) {
    movieData = movieData.filter(obj => obj.genre.toLowerCase().includes(genre.toLowerCase()))
  }
  if (country) {
    movieData = movieData.filter(obj => obj.country.toLowerCase().includes(country.toLowerCase()))
  }
  if (avg_vote) {
    movieData = movieData.filter(obj => obj.avg_vote >= (avg_vote))
  }

  res.send(movieData)
}) 

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});

