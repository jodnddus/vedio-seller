import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";
import { Login, Home, Profile, Videos } from '../pages/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Router>
          <React.Fragment>
            <Route exact={true} path={'/'} component={Login} />
            <Route exact={true} path={'/home'} component={Home} />
            <Route exact={true} path={'/profile'} component={Profile} />
            <Route path={'/videos/:videoId'} component={Videos} />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
