import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Player from './Player';

const Players = ({ data: { loading, error, players }}) => {
	if(loading) {
		return <p>Loading...</p>
	}
	if(error) {
		return <p>{error.message}</p>
	}
console.log(players);
	return (
		<div>
		  { players.map(( item, index ) => 
			<Player 
				key={index} 
				{...item}
			/>
			)}
		</div>
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
			teamShort
	  	teamJersey
	  	teamPos
			injuryTag
			college
			height
			weight
			birthdate
			yearspro
			alias
    }
  }
`;

export default graphql(playersQuery)(Players);