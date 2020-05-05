import React from "react";

const random = (props) => {

  let randomNum = Math.floor((Math.random() * props.max) + props.min);

  return (
            <div className="greetings">
            <span>Random value between {props.min} and {props.max} => {randomNum}</span>
            </div>
  );
};

export default random;