import React from "react";
import "./style.css";
import { Player } from "./player";
import { RollDice } from "./rollDice";
import { Hold } from "./hold";

export class Game extends React.Component {
  state = {
    player_TotalScore: 0,

    player_CurrentScore: 0,

    player1_Turn: true,
    player2_Turn: false,
    dicesValue: [0, 0],
    scoreTOWin: 100,
  };

  rollDices = () => {
    let firstRandomDice = Math.floor(Math.random() * 6 + 1);
    let secondRandomDice = Math.floor(Math.random() * 6 + 1);
    this.setState({
      dicesValue: [firstRandomDice, secondRandomDice],
      player_CurrentScore: firstRandomDice + secondRandomDice,
      player_TotalScore:
        this.state.player_CurrentScore + this.state.player_TotalScore,
    });

    return firstRandomDice, secondRandomDice;
  };

  render() {
    return (
      <>
        <div className="gameBoard">
          <Player
            backgroundcolor="lightgrey"
            number="1"
            totalScore={this.state.player_TotalScore}
            currentScore={this.state.player_CurrentScore}
          />
          <Player
            backgroundcolor="grey"
            number="2"
            totalScore={this.state.player_TotalScore}
            currentScore={this.state.player_CurrentScore}
          />
        </div>
        <RollDice
          onClick={this.rollDices}
          valueOfDiceOne={this.state.dicesValue[0]}
          valueOfDiceTwo={this.state.dicesValue[1]}
        />
        <Hold />
      </>
    );
  }
}
