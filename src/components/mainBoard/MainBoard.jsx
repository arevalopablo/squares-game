import React from "react";
import "./mainBoard.css";
import Square from "../square/Square";

const MainBoard = (props) => {
  const { colores, onClick } = props;

  return (
    <>
      <div className="main">
        {colores.map((color) => (
          <Square
            key={color.id}
            width={"60px"}
            height={"60px"}
            background={color.background}
            border={"1px solid #000"}
            onClick={() => onClick(color.background)}
          />
        ))}
      </div>
    </>
  );
};

export default MainBoard;
