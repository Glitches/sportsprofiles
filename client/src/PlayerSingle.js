import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PlayerHeader from './PlayerHeader';
import Player from './Player';

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
        console.log(player);
        
        return (
          <div className="player">
            <div className="playerPhoto">
            <img className="profilePhoto" width="150" alt={this.props.displayName} src={ "/img/" + this.props.alias + ".png" } />
            </div>
            <div className="playerName">
            {this.props.displayName}
            </div>
            <div className="playerTeam">
            {this.props.team}
            </div>
            <div className="playerCombo">
                #{this.props.teamJersey} | {this.props.teamShort} | {this.props.teamPos}
            </div>
            <div className="playerCollege">
                {this.props.college}
            </div>
            <div className="playerHW">
            {this.props.height} {this.props.weight}
            </div>
            <div className="playerBD">
            {this.props.birthdate}
            </div>
            <div className="playerYears">
            {this.props.yearspro} Years Pro
            </div>
        </div>
        );
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