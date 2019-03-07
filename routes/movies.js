const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import Movie model
const Movie = require('../models/Movie');

// @route GET movies/test
// @desc Tests movies route
router.get('/test', (req, res) => res.json({msg: "Movies Works!"}));

// @route GET movies/
// @desc Get movies
router.get('/', (req, res) => {
  Movie.find()
    .sort({name: 1})
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({noMoviesFound: "No movies found"}));
});

// @route GET movies/:id
// @desc Get movie by id
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({noMovieFound: "No movie found with that ID"}));
});

// @route POST movies
// @desc Create movie listing
router.post('/add', (req, res) => {
  const newMovie = new Movie({
    name: req.body.name,
    description: req.body.description,
    year: req.body.year,
  });

  newMovie.save().then(movie => res.json(movie));
});


module.exports = router;
