const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import Movie model
const Movie = require('../models/Movie');

// @route GET movies/test
// @desc Tests movies route
router.get('/test', (req, res) => res.json({msg: "Movies Works!"}));

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
