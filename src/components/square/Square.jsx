import React from "react";

const Square = (props) => {
  const { width, height, background, border, onClick } = props;
  return (
    <div
      style={{
        margin: "5px",
        width: width,
        height: height,
        background: background,
        borderRadius: "5px",
        border: border,
      }}
      onClick={onClick}
    ></div>
  );
};

export default Square;
