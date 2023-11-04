import React from "react";
import "../loader/loader.css";

const Loader = (props) => {
  const {colores} = props

  const newArray = colores.slice(5, 14).map((color) => {
    return color.background
  }) 

  return (
    <div className="loader">
      <div className="lds-grid">
        {newArray.map((color, index) => (
          <div key={index} style={{background: color}}></div>

        ))}
      </div>
      <h1 style={{ color: "#fff" }}>Loading</h1>
    </div>
  );
};

export default Loader;
