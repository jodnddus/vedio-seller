import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, Home } from '../pages/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
