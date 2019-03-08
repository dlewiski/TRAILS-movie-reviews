import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MovieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { movies: []}
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    this.cancelTokenSource = axios.CancelToken.source()
    try {
      const response = await axios.get('http://localhost:4000/movies/', {
        cancelToken: this.cancelTokenSource.token
      })
      this.setState({movies: response.data})
    } catch (err) {
      if (axios.isCancel(err)) {
        //ignore
      } else {
        //propegate
        throw err
      }
    } finally {
      this.cancelTokenSource = null
    }
  }

  render() {
    return(
      <div>
        Movie List works!
      </div>
    )
  }
}
