import React from "react";


function Child({ onChangeColor, color }) {
  return (
    <div 
      onClick={onChangeColor}
      className="child" 
      style={{ backgroundColor: "#FFF" }}
    ></div>
  );
}

export default Child;