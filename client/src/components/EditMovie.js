import React from 'react';
import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;

export default class EditMovie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {reviews: []}
  }

  componentDidMount() {
    this.getMovie()
  }

  getMovie = () => {
    axios.get('/movies/' + this.props.match.params.id,
      { cancelToken: new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        cancel = c;
      })
    })
    .then(response => {
      this.setState({ ...response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    console.log('Form submitted: ');

    const updatedMovie = {
      name: this.state.name,
      description: this.state.description,
      year: this.state.year
    }

    axios.post('/movies/update/' + this.props.match.params.id, updatedMovie)
      .then(res => console.log(res.data));

    this.props.history.push('/movies');
  }

  deleteMovie = () => {
    axios.delete('/movies/' + this.props.match.params.id)
    .then(res => console.log(res.data));

    this.props.history.push('/movies');
  }

  componentWillUnmount() {
    cancel()
  }

  render() {
    return(
      <div>
        <h3>Create New Movie Listing</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Movie Title:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Year Released:</label>
              <input
                type="number"
                name="year"
                className="form-control"
                value={this.state.year}
                onChange={this.onChange}
              />
            </div>
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
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="submit" value="Update Movie Listing" className="btn btn-primary" />
            </div>
            <div className="form-group col-md-6">
              <button onClick={this.deleteMovie} style={{ float: "right" }} className="btn btn-danger">Delete Movie Listing</button>
            </div>
          </div>
        </form>
        <h4>Movie Listing Draft:</h4>
        <div className="card" style={{ marginTop: 10 }}>
          <h5 className="card-header">{this.state.name}</h5>
          <div className="card-body">
            <p className="card-title">Year Released: {this.state.year}</p>
            <p className="card-text">Description: {this.state.description}</p>
            <h5>{this.state.name} Reviews:</h5>
            { this.state.reviews.map(review => {
              return <p key={review._id} style={{ fontStyle: "italic" }}>{review.text}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}
