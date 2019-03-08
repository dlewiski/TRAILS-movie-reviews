import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movie'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

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
    // Prevent multiple db calls, cancel async task
    source.cancel()
  }

  getMovies = () => {
    axios.get('/movies', { cancelToken: source.token })
    .catch( thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      } else {
        // handle error
      }
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
