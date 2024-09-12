import React from "react";

function BoardInitial({ row, col, isBomb, isActive, handleClick }) {
  const cellStyle = {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ddd",
    backgroundColor: isActive ? (isBomb ? "red" : "lightgrey") : "white",
    cursor: "pointer",
  };

  return <div style={cellStyle} onClick={handleClick}></div>;
}

export default BoardInitial;
