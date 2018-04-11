import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './Player.css';
import {Card} from 'semantic-ui-react';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <Card>
          <div className="playerPhoto">
            <img
              className="profilePhoto"
              width="150"
              alt={this.props.displayName}
              src={'/img/' + this.props.alias + '.png'}
            />
          </div>
          <Card.Description>
            <Card.Header className="playerName">
              <NavLink to={'/player/' + this.props.id}>
                {this.props.displayName}
              </NavLink>
            </Card.Header>
            <div className="playerTeam">{this.props.team}</div>
            <div className="playerCombo">
              #{this.props.teamJersey} | {this.props.teamShort} |{' '}
              {this.props.teamPos}
            </div>
            <div className="playerCollege">{this.props.college}</div>
            <div className="playerHW">
              {this.props.height} {this.props.weight}
            </div>
            <div className="playerBD">{this.props.birthdate}</div>
            <div className="playerYears">{this.props.yearspro} Years Pro</div>
          </Card.Description>
        </Card>
      </div>
    );
  }
}

export default Player;
