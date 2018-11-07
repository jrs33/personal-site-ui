import React, { Component } from 'react';
import Home from './components/home_page/Home';
import Books from './components/book/Books';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';

const activeNavLink = {fontWeight: "bold", "border-bottom": "solid", "border-bottom-color": "red"}

class App extends Component {

  render() {
    return (
      <Router>
        <div className="globalStyles">
          <div>
            <ul className="navList">
              <li className="navListItem">
                <NavLink className="navLink" activeStyle={activeNavLink} to="/home">Home</NavLink>
              </li>
              <li className="navListItem">
                <NavLink className="navLink" activeStyle={activeNavLink} to="/about">About</NavLink>
              </li>
              <li className="navListItem">
                <NavLink className="navLink" activeStyle={activeNavLink} to="/work">Work</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/work" component={Work} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
