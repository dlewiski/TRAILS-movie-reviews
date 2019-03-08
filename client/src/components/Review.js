import React from 'react';

const Review = (props) => {
  return(
    <div style={{ marginBottom: 10 }}>
      <p style={{ fontStyle: "italic" }}>{props.review}</p>
      <form onSubmit={ props.onSubmit }>
        <textarea onChange={ props.onChange } className="form-control" rows="3" />
        <input type="submit" className="button btn-danger" />
      </form>
    </div>
  )
}

export default Review
