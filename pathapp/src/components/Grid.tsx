import { useState } from "react";

function Grid() {
  const ROWS = 20;
  const COLS = 40; // This number is adjustable
  // TODO: Create a slider to change the COLS and therefore use "setGrid"
  const [grid, setGrid] = useState(() => {
    const array = [];
    for (let i = 0; i < ROWS; i++) {
      array.push(new Array(COLS).fill(""));
    }
    return array;
  });
  const [start, setStart] = useState([Math.round(ROWS / 2), Math.round(COLS / 4)]);
  const [end, setEnd] = useState([Math.round(ROWS / 2), Math.round(COLS - (COLS / 4))]);

  return (
    <>
    <div className="flex flex-col items-center justify-center">
        {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row flex">
            {row.map((cell, cellIndex) => (
                <div key={cellIndex} className={`h-8 w-8 border-solid border 
                ${rowIndex === start[0] && cellIndex === start[1] ? 'bg-green-500' : ''}
                ${rowIndex === end[0] && cellIndex === end[1] ? 'bg-red-500' : ''}
                `}>
                </div>
            ))}
            </div>
        ))}
    </div>
    </>
  );
}

export default Grid;
