import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import MovieReviews from './pages/MovieReviews';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="site-content">
          <Header />

          <main class="main-content">
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/reviews">
              <MovieReviews />
            </Route>

          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
