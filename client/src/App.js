import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import CreateMovie from './components/CreateMovie';
import EditMovie from './components/EditMovie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "container">
          <Navbar />
          <Route exact path="/movies" component={ MovieList } />
          <Route exact path="/movies/add" component={ CreateMovie } />
          <Route exact path="/movies/update/:id" component={ EditMovie } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
