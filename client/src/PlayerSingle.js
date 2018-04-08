import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class PlayerSingle extends Component {
    
    componentWillMount() {
        variables: {
            playerId: this.props.match.params.id
        }
        
    }
    render() {
        const { data: {loading, error, player }, match } = this.props;
        //if (loading) {
        //  return <PlayerHeader alias={match.params.alias}/>;
       // }
        if (error) {
            return <p>{error.message}</p>;
        }

        if(loading) {
            return <p>Loading...</p>
        } else {
            console.log(player);
            return (
                <div className="player">
                    <div className="playerPhoto">
                        <img className="profilePhoto" width="150" alt={player.displayName} src={ "/img/" + player.alias + ".png" } />
                    </div>
                    <div className="playerName">
                        {player.displayName}
                    </div>
                    <div className="playerTeam">
                        {player.team}
                    </div>
                    <div className="playerCombo">
                        #{player.teamJersey} | {player.teamShort} | {player.teamPos}
                    </div>
                    <div className="playerCollege">
                        {player.college}
                    </div>
                    <div className="playerHW">
                        {player.height} {player.weight}
                    </div>
                    <div className="playerBD">
                        {player.birthdate}
                    </div>
                    <div className="playerYears">
                        {player.yearspro} Years Pro
                    </div>
                </div>
            );
        }

      }
    }
    
    export const playerSingleQuery = gql`
      query PlayerSingleQuery($playerId: ID!) {
        player(id: $playerId) {
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
    
    export default (graphql(playerSingleQuery, {
      options: (props) => ({
        variables: { playerId: props.match.params.id },
      }),
    })(PlayerSingle));