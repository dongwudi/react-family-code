import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hello from './Hello.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/hello">hello</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        
        <div>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default App;