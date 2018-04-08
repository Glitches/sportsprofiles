import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Player.css';

class Player extends Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {

	return(
        <div className="player">
            <div className="playerPhoto">
            <img className="profilePhoto" width="150" alt={this.props.displayName} src={ "img/" + this.props.alias + ".png" } />
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

export default Player;