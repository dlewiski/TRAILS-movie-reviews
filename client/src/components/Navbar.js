import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/movie-projector-icon.png';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="/" target="_blank">
        <img src={logo} width="30" height="30" alt="movie projector" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/" className="navbar-brand"> TRAILS Movie Reviews</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Movie List</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">Create Movie Listing</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
