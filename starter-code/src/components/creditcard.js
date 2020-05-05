import React from "react";

const creditcard = (props) => {
    function splitNumber(num){
        return (num).split('').map((idxNum) => { return Number(idxNum); })
      }
    const number = splitNumber(props.number)
      console.log(number);
      const secretNumber = "**** **** **** " + number.splice(12).join("")
    const style = {
        backgroundColor: `${props.bgColor}`,
    }

  return (
      <div className="cc" style={style}>
            <div className="ccLogo">
                <div>
                <p>{props.type}</p>
                </div>
            </div>
            <div className="ccNumber">
                {secretNumber}
            </div>
            <div className="ccBody">
            <p>Expires {props.expirationMonth} / {props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
            </div>
      </div>
  );
};

export default creditcard;