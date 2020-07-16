import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div id="site-content">
        <Header />
        <main class="main-content">
          <Home />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
