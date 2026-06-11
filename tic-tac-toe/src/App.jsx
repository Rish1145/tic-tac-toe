import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let line of lines) {
    const [a,b,c] = line;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }

  return null;
}

export default App;
