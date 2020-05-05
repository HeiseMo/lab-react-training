import React, { Component } from "react";

let diceImg = {
  0: "/img/dice-empty.png",
  1: "/img/dice1.png",
  2: "/img/dice2.png",
  3: "/img/dice3.png",
  4: "/img/dice4.png",
  5: "/img/dice5.png",
  6: "/img/dice6.png"
};

class dice extends Component {
  state = {
      value: 0
  };
  diceHandler = () => {
      this.setState({
          value: 0
      });
      setTimeout(() => {
        this.setState({
          value: Math.floor(Math.random() * 6) +1
        });
      }, 100);
  };

  render() {
      return (
        <img
        onClick={this.diceHandler}
        src={diceImg[this.state.value]}
        alt="dice"
      />
      );
  }
}

export default dice;