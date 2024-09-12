import React, { useState, useEffect } from "react";
import BoardInitial from "./boardInitial";

function Buscaminas() {
  const boardSize = [20, 20];
  const [rows, cols] = boardSize;
  const [mines, setMines] = useState(initializeMines());
  const [activeCells, setActiveCells] = useState({});
  const [attempts, setAttempts] = useState(0);

  function initializeMines() {
    const mines = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.floor(Math.random() * 2));
      }
      mines.push(row);
    }
    return mines;
  }

  useEffect(() => {
    setMines(initializeMines());
  }, []);

  const handleClick = (row, col) => {
    if (mines[row] && mines[row][col] !== undefined) {
      const isBomb = mines[row][col] === 1;
      const newActiveCells = { ...activeCells, [`${row}-${col}`]: true };
      setActiveCells(newActiveCells);
      if (!isBomb) {
        setAttempts(attempts + 1);
      }
    }
  };

  const handleReset = () => {
    setAttempts(0);
    setMines(initializeMines());
    setActiveCells({});
  };

  const generateBoard = () => {
    const board = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < cols; colIndex++) {
        row.push(
          <BoardInitial
            key={`cell-${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            isBomb={mines[rowIndex] && mines[rowIndex][colIndex] === 1}
            isActive={!!activeCells[`${rowIndex}-${colIndex}`]}
            handleClick={() => handleClick(rowIndex, colIndex)}
          />
        );
      }
      board.push(
        <div className="flex justify-center mb-1" key={`row-${rowIndex}`}>
          {row}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-10 bg-gray-100">
      <div className="w-full max-w-[90%] max-h-[90%] text-center mb-6">
        <h1 className="text-3xl font-bold mb-4">Buscaminas</h1>
        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            {attempts} Intentos
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 transition"
          >
            Reiniciar
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">{generateBoard()}</div>
    </div>
  );
}

export default Buscaminas;
