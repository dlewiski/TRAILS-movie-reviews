import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

import Review from './Review'

export default class Movie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showReviewField: false,
      reviewToAdd: ''
    }
  }

  onClick = () => {
    this.setState(prevState => ({
      showReviewField: !prevState.showReviewField
    }))
  }

  onChange = e => {
    this.setState({ reviewToAdd: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newReview = { text: this.state.reviewToAdd }

    axios.post('movies/review/' + this.props.movie._id, newReview)
      .then(res => console.log(res.data));

    this.setState({ showReviewField: false, reviewToAdd: '' })
  }

  render() {
    return(
      <div>
        <div className="card" style={{ marginTop: 10 }}>
          <h5 className="card-header" style={{ paddingRight: 0 }}>
            {this.props.movie.name}
            <span style={{ float: "right" }}>
              <Link to="/" className="card-header" style={{ backgroundColor: "rgb(0,0,0,0)",
              borderBottom: 0 }}>Edit</Link>
            </span>
          </h5>
          <div className="card-body">
            <p className="card-title">Year Released: {this.props.movie.year}</p>
            <p className="card-text">Description: {this.props.movie.description}</p>
            <h5>{this.props.movie.name} Reviews:</h5>
            { this.props.movie.reviews.map(review => {
              return <p key={review._id} style={{ fontStyle: "italic" }}>{review.text}</p>
            })}
            { this.state.showReviewField ? <Review onChange={this.onChange} onSubmit={this.onSubmit} review={this.state.reviewToAdd} /> : null }
            <button onClick={this.onClick} className="btn btn-warning">Add Review</button>
          </div>
        </div>
      </div>
    )
  }
}
