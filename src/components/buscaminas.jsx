import React from "react";
import BoardInitial from "./boardInitial";
import { useState } from "react";

function Buscaminas() {
  const boardSize = [10, 10];
  const [rows, cols] = boardSize;
  const [isActive, setIsActive] = useState(false);
  const [activeCells, setActiveCells] = useState({});
  const board = [];

  const handleClick = (row, col) => {
    setActiveCells((prev) => ({
      ...prev,
      [`${row}-${col}`]: true,
    }));
  };

  // Basicamente creamos un tablero de 10x10 y le asignamos un valor de 0 o 1 aleatoriamente
  const initializeMines = () => {
    const mines = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => Math.floor(Math.random() * 2))
      );
    return mines;
  };

  const [mines] = useState(initializeMines);

  const generateBoard = () => {
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < cols; colIndex++) {
        row.push(
          <BoardInitial
            key={`cell-${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            isBomb={mines[rowIndex][colIndex]}
            isActive={!!activeCells[`${rowIndex}-${colIndex}`]}
            handleClick={() => handleClick(rowIndex, colIndex)}
          />
        );
      }

      board.push(
        <div className="w-full flex justify-center" key={`row-${rowIndex}`}>
          {row}
        </div>
      );
    }

    return board;
  };

  return (
    <div className="w-full h-full flex flex-wrap mx-auto pt-10 w-[90%] h-[90%]">
      {generateBoard()}
    </div>
  );
}

export default Buscaminas;
