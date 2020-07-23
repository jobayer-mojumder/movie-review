import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import MovieReviews from './pages/MovieReviews';
import SingleReview from './components/movieReviews/SingleReview';

import './App.css';

require('dotenv').config()

class App extends Component {

  render() {
    return (
      <Router>
        <div id="site-content">
          <Header />
          <main className="main-content">
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />

            <Route path="/reviews" component={MovieReviews} />

            <Route path="/single/:id" component={SingleReview} />

          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
