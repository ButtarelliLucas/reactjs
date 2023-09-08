// PrevArrow.jsx
import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <button className="slick-arrow custom-prev-arrow">Prev</button>
    </div>
  );
};

export default PrevArrow;
