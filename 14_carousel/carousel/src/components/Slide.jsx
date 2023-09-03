import React from "react";

const Slide = ({ url, isActive }) => {
  return (
    <div className={isActive ? "slide active" : "slide"}>
      {isActive && <img src={url} alt="" />}
    </div>
  );
};

export default Slide;
