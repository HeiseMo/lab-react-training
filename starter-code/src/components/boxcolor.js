import React from "react";

const boxcolor = (props) => {
const style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    border: "1px solid black",
    padding: "60px",
}

  return (
            <div className="box" style={style}>
                <span>rgb({props.r},{props.g},{props.b})</span>
            </div>

  );
};

export default boxcolor;