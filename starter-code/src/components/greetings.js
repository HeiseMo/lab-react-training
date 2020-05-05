import React from "react";

const greetings = (props) => {
  let language = {
    tr: "Merhaba",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour"
  };
  let greetingMsg = language[props.lang];

  return (
            <div className="greetings">
            <span>{greetingMsg} {props.children}</span>
            </div>
  );
};

export default greetings;