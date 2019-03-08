import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "container">
          <Navbar />
          <Route exact path="/movies" component={ MovieList } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
