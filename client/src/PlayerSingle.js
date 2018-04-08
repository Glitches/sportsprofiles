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

            var teamLogo;
            switch(player.teamShort) {
                case 'LA': teamLogo = 'sparks-logo';
                    break;
                case 'WAS': teamLogo = 'mystics-logo';
                    break; 
                case 'MIN': teamLogo = 'lynx-logo';
                    break;
                case 'SEA': teamLogo = 'storm-logo';
                    break;
            }
            return (
                <div className="playerBox">
                    <div className="headshot">
                    <div class={teamLogo}>
                    <img className="profilePhoto" width="180" alt={player.displayName} src={ "/img/" + player.alias + ".png" } /></div>
                        
                    </div>
                    <div className="playerTitle">
                        {player.displayName}
                    </div>
                    <div className="playerBoxTeam">
                        {player.team}
                    </div>
                    <div className="playerBoxCombo">
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