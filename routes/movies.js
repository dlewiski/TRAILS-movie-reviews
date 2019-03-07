const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import Movie model
const Movie = require('../models/Movie');

// Routes for movie listings

// @route GET movies/test
// @desc Tests movies route
router.get('/test', (req, res) => res.json({msg: 'Movies Works!'}));

// @route GET movies/
// @desc Get movie listings
router.get('/', (req, res) => {
  Movie.find()
    .sort({name: 1})
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({noMoviesFound: 'No movies found'}));
});

// @route GET movies/:id
// @desc Get movie listing by id
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({noMovieFound: 'No movie found with that ID'}));
});

// @route POST movies
// @desc Create movie listing
router.post('/add', (req, res) => {
  const newMovie = new Movie({
    name: req.body.name,
    description: req.body.description,
    year: req.body.year
  });

  newMovie.save().then(movie => res.json(movie));
});

// @route Post movies/update/:id
// @desc Update specific movie listing
router.post('/update/:id', (req, res) => {
  const movieFields = {};
    if (req.body.name) movieFields.name = req.body.name;
    if (req.body.description) movieFields.description = req.body.description;
    if (req.body.year) movieFields.year = req.body.year;

  Movie.findOneAndUpdate(
    { id: req.body.id },
    { $set: movieFields },
    { new: true }
  )
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({cannotUdate: 'Could not update movie'}));
});

// @route DELETE movies/:id
// @desc Delete a movie listing
router.delete('/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    movie.remove().then(() => res.json({success: true}));
  })
  .catch(err => res.status(404).res.json({movieNotFound: 'Movie not found'}));
});

// Routes for reviews to movie listings

// @route POST movies/review/:id
// @desc Add review to movie listing
router.post('/review/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    const newReview = {
      text: req.body.text
    }

    // Add to reviews array
    movie.reviews.unshift(newReview);

    // Save
    movie.save().then(movie => res.json(movie))
  })
  .catch(err => res.status(404).json({ postNotFound: 'No post found' }));
});

// @route POST movies/review/:id/update/:review_id
// @desc Update review on movie listing
router.post('/review/:id/update/:review_id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    // Check if review exists
    if( movie.reviews.filter(review => review.id.toString() === req.params.review_id).length === 0 ) {
      return res.status(404).json({ reviewNotExist: "Review does not exist" })
    }

    // Find review in array and set to new value
    movie.reviews
    .find(review => review.id.toString() === req.params.review_id)
    .text = req.body.text

    // Save
    movie.save().then(movie => res.json(movie))
  })
  .catch(err => res.status(404).json({ reviewNotFound: 'No post found' }));
});

// @route DELETE movies/review/:id/:review_id
// @desc Remove review from movie listing
router.delete('/review/:id/:review_id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    // Check if review exists
    if( movie.reviews.filter(review => review.id.toString() === req.params.review_id).length === 0 ) {
      return res.status(404).json({ reviewNotExist: "Review does not exist" })
    }

    // Get remove index
    const removeIndex = movie.reviews
    .map(review => review._id.toString())
    .indexOf(req.params.review_id);

    // Splice review out of array
    movie.reviews.splice(removeIndex, 1);

    movie.save().then(movie => res.json(movie));
  })
  .catch(err => res.status(404).json({ review: 'No review found' }));
});



module.exports = router;
