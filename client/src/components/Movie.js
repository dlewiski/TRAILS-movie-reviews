import React from 'react';
import { Link } from 'react-router-dom'

import Review from './Review'

const Movie = ({ movie }) => {
  return(
    <div>
      <div className="card" style={{ marginTop: 10 }}>
        <h5 className="card-header" style={{ paddingRight: 0 }}>
          {movie.name}
          <span style={{ float: "right" }}>
            <Link to="/" className="card-header" style={{ backgroundColor: "rgb(0,0,0,0)",
            borderBottom: 0 }}>Edit</Link>
          </span>
        </h5>
        <div className="card-body">
          <p className="card-title">Year Released: {movie.year}</p>
          <p className="card-text">Description: {movie.description}</p>
          <h5>{movie.name} Reviews:</h5>
          { movie.reviews.map(review => {
            return <p key={review._id} style={{ fontStyle: "italic" }}>{review.text}</p>
          })}
          <Link to="/" className="btn btn-warning">Add Review</Link>
        </div>
      </div>
    </div>
  )
}

export default Movie;
