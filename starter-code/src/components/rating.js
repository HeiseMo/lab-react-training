import React from "react";

const rating = (props) => {
    let ratingStars = "";
    const ratingNum = Math.round(props.children);
    if(ratingNum === 0) ratingStars = "☆☆☆☆☆";
    if(ratingNum === 1) ratingStars = "★☆☆☆☆";
    if(ratingNum === 2) ratingStars = "★★☆☆☆";
    if(ratingNum === 3) ratingStars = "★★★☆☆";
    if(ratingNum === 4) ratingStars = "★★★★☆";
    if(ratingNum === 5) ratingStars = "★★★★★";

  return (
      <div className="singleRating">
        <p>{ratingStars}</p>
      </div>
  );
};

export default rating;