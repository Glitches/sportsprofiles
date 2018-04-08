import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Players from './Players';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
          <div className="App-header">
            <h2>Players</h2>
          </div>
        <Players />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
