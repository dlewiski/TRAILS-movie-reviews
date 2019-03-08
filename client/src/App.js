import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import CreateMovie from './components/CreateMovie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "container">
          <Navbar />
          <Route exact path="/movies" component={ MovieList } />
          <Route exact path="/movies/add" component={ CreateMovie } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
