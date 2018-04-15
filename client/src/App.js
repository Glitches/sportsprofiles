import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Players from './Players';
import { Route } from "react-router-dom";
import HomePage from "./HomePage"
import LoginPage from "./Login"
import playersPage from "./playersPage"


const App = () => 
  <div className="ui container">
  <Route path="/" exact component={HomePage} />
  <Route path="/login" exact component={LoginPage} />
  <Route path="/playersPage" exact component={playersPage} />
  </div>;

export default App;
