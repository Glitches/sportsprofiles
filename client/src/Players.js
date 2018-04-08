import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';

// import Player from './Player';

const Players = ({ data: { loading, error, players }}) => {
	if(loading) {
		return <p>Loading...</p>
	}
	if(error) {
		return <p>{error.message}</p>
	}
console.log(players);
	return (
		<ul>
		  { players.map( item => 
		  (<li key={item.id}>{item.firstName} {item.lastName} {item.displayName} {item.team} {item.teamJersey} {item.teamPos} {item.injuryTag}</li>)
		  )}
		</ul>
	  );
}

export const playersQuery = gql`
  query PlayersQuery {
    players {
      id
      firstName
	  lastName
	  displayName
	  team
	  teamJersey
	  teamPos
	  injuryTag
    }
  }
`;

export default graphql(playersQuery)(Players);