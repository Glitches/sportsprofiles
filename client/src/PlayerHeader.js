import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PlayerHeader = ({ data: { loading, error, player }}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      <div>
        player header
      </div>
    </div>
  );
}

export const playerQuery = gql`
  query PlayerQuery($playerId: ID!) {
    player(id: $playerId) {
      id
      firstName
      lastName
    }
  }
`;

export default (graphql(playerQuery, {
  options: (props) => ({
    variables: { playerId: props.playerId },
  }),
})(PlayerHeader));
