import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movie'

const CancelToken = axios.CancelToken;
let cancel;

export default class MovieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { movies: []}
  }

  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate() {
    this.getMovies()
  }

  componentWillUnmount() {
    // Prevent multiple db calls, cancel async tasks
    cancel()
  }

  getMovies = () => {
    axios.get('/movies',
      { cancelToken: new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        cancel = c;
      })
    })
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
        <h3>Movie Listings</h3>
        {this.movieList()}
      </div>
    )
  }
}
