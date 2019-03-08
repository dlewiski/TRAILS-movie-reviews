import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movie'

const CancelToken = axios.CancelToken;
let cancel;

export default class FeaturedMovie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      featuredMovie: { name: '', description: '', year: 1900, reviews: [] }
    }
  }

  componentDidMount() {
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
      this.setState({
        movies: response.data,
        featuredMovie: response.data[this.generateIndex(response.data.length)]});
    })
    .catch(error => {
      console.log(error);
    })
  }

  generateIndex = (arrLength) => {
    return Math.floor(Math.random() * Math.floor(arrLength));
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <h3>Featured Movie:</h3>
        <Movie movie={this.state.featuredMovie} />
      </div>
    )
  }
}
