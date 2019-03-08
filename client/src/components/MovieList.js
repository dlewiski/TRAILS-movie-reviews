import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movie'

export default class MovieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { movies: []}
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    axios.get('/movies')
    .then(response => {
      this.setState({movies: response.data});
    })
    .catch(error => {
      console.log(error);
    })
  }

  movieList = () => {
    return this.state.movies.map( movie => {
      return <Movie movie={movie} key={movie._id} />
    })
  }

  render() {
    return(
      <div>
        Movie List works!
        {this.movieList()}
      </div>
    )
  }
}
