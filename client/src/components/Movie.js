import React from 'react';

const Movie = ({movie}) => {
  return(
    <div>
      <p>Name: {movie.name}</p>
      <p>Description: {movie.description}</p>
      <p>Year: {movie.year}</p>
      <p>ID: {movie._id}</p>
    </div>
  )
}

export default Movie;
