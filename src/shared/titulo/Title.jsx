import React from "react";
import "./title.css";

const Title = (props) => {
  const { title } = props;

  if (title) {
    return (
      <div className="title">
        <h2>
          RANDOM
          <span className="s"> S</span>
          <span className="q">Q</span>
          <span>U</span>
          <span className="a">A</span>
          <span className="r">R</span>
          <span className="e">E </span>
          GAME
        </h2>
      </div>
    );
  }
  return <div className="title">
          <h2>Click on the same color</h2>
        </div>;
};

export default Title;
