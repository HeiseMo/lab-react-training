import React from "react";

const idcard = (props) => {
  return (
    <div className="cards">
    <div className="profileImg">
      <img alt="avatar" src={props.picture}/>
    </div>
    <div className="profileInfo">
      <div><span>First Name: </span><span>{props.firstName}</span></div>
      <div><span>Last Name: </span><span>{props.lastName}</span></div>
      <div><span>Gender: </span><span>{props.gender}</span></div>
      <div><span>Height: </span><span>{props.height}</span></div>
      <div><span>Birth: </span><span>{props.birth}</span></div>
    </div>
  </div>
  );
};

export default idcard;