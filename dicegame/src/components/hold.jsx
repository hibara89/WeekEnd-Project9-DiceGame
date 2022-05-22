import React from "react";
import "./style.css";

export class Hold extends React.Component {
  clickOnHold = (player1, player2) => {};

  render() {
    return (
      <div className="Hold">
        <button className="holdBtn" onClick={this.clickOnHold}>
          Hold
        </button>
      </div>
    );
  }
}
