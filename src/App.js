import React, { Component } from 'react';
import Home from './components/home_page/Home';
import Books from './components/book/Books';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import About from './components/about/About'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/books" component={Books} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
