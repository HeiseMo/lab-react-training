import React, { Component } from "react";

class likebutton extends Component {
  state = {
      count: 0,
      text: "Like"
  };

  likeHandler = () => {
      const newCount = this.state.count + 1;
      let textCheck = "";
      this.state.count === 0 ? textCheck ="Like" : textCheck = "Likes";

      this.setState({
          count: newCount,
          text: textCheck
      });
  };

  render() {
      return (
        <div className="likeButton">
          <button
              className=""
              onClick={this.likeHandler}>
              {this.state.count} {this.state.text}
          </button>
          </div>
      );
  }
}

export default likebutton;