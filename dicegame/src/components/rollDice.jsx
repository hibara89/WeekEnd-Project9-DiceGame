import React from "react";
import dice1 from "./assets/dice-1.png";
import dice2 from "./assets/dice-2.png";
import dice3 from "./assets/dice-3.png";
import dice4 from "./assets/dice-4.png";
import dice5 from "./assets/dice-5.png";
import dice6 from "./assets/dice-6.png";
import "./style.css";

export class RollDice extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>ROLL DICE</button>
        <div className="val">{this.props.valueOfDiceOne}</div>
        <div>{this.props.valueOfDiceTwo}</div>

        {/* <img
          className="firstDice"
          width={"200px"}
          src={require(`./assets/dice-${this.state.diceOne}.png`)}
        />
        <img className="secondDice" width={"200px"} src={this.secondDice} /> */}
      </div>
    );
  }
}
