import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Route path='/' component={Login} />
    </Router>
  );
}

export default App;
