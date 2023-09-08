// NextArrow.jsx
import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <button className="slick-arrow custom-next-arrow">Next</button>
    </div>
  );
};

export default NextArrow;
