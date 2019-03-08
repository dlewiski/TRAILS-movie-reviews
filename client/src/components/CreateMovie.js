import React from 'react';
import axios from 'axios';

export default class CreateMovie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      year: 1900,
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    console.log('Form submitted: ');

    const newMovie = {
      name: this.state.name,
      description: this.state.description,
      year: this.state.year,
    }

    axios.post('/movies/add', newMovie)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      description: '',
      year: 1900,
    })
  }

  render() {
    return(
      <div>
        <h3>Create New Movie Listing</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Movie Title:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Movie Description:</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Year Released:</label>
            <input
              type="number"
              name="year"
              className="form-control"
              value={this.state.year}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Movie Listing" className="btn btn-primary" />
          </div>
        </form>
        <h4>New Movie to be added</h4>
        <p>Movie Title: {this.state.name}</p>
        <p>Movie Description: {this.state.description}</p>
        <p>Movie Year: {this.state.year}</p>
      </div>
    )
  }
}
