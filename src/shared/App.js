import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Login } from '../pages/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Login} />
      </Router>
    );
  }
}

export default App;
