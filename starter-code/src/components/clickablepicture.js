import React, { Component } from "react";

class clickablepicture extends Component {
  state = {
      isClicked: false
  };
  clickHandler = () => {
      this.setState({
          isClicked: !this.state.isClicked
      });
  };

  render() {
      return (
        <img
        onClick={this.clickHandler}
        src={this.state.isClicked ? this.props.imgClicked : this.props.img}
        alt="maxence"
      />
      );
  }
}

export default clickablepicture;