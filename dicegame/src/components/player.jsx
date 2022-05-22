import React from "react";
import { Hold } from "./hold";
import { RollDice } from "./rollDice";
import "./style.css";

export class Player extends React.Component {
  render() {
    return (
      <div
        className="player"
        style={{ backgroundColor: this.props.backgroundcolor }}
      >
        <h2>Player {this.props.number}</h2>
        <div className="totalScore">{this.props.totalScore}</div>
        <div className="currentScore">
          current
          <span className="currentValue"> {this.props.currentScore}</span>
        </div>
      </div>
    );
  }
}
