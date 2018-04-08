import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';

import Players from './Players';
import Player from './Player';
import PlayerSingle from './PlayerSingle';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <NavLink to="/"><h2>Players</h2></NavLink>
            </div>
            <Switch>
              <Route exact path="/" component={Players}/>
              <Route path="/player/:id" component={PlayerSingle}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
