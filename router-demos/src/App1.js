import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SubCategory from './SubCategory.js';

class App1 extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/category/1">category1</Link>
          </li>
          <li>
            <Link to="/category/2">category2</Link>
          </li>
          <li>
            <Link to="/category/3">category3</Link>
          </li>
        </ul>
        
        <div>
          <Route path="/category/:id" component={SubCategory}></Route>
        </div>
      </Router>
    )
  }
}

export default App1;