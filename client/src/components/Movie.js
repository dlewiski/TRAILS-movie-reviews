import React from 'react';


const Review = ({ review }) => {
  return(
    <div>
      <p>Review: {review.text}</p>
    </div>
  )
}

const Movie = ({ movie }) => {
  return(
    <div>
      <h3>Movie Listing</h3>
      <p>Name: {movie.name}</p>
      <p>Description: {movie.description}</p>
      <p>Year: {movie.year}</p>
      <p>ID: {movie._id}</p>
      <h4>Movie Reviews</h4>
      { movie.reviews.map(review => {
        return <Review review={review} key={review._id} />
      })}
    </div>
  )
}

export default Movie;
