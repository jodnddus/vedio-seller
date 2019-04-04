import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";
import { Login, Home } from '../pages/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
