import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);

  const handleSquareClick = position => {
    if (board[position]) {
      return;
    } else {
      setBoard(prev => {
        return prev.map((square, pos) => {
          if (pos === position) {
            return isXNext ? 'X' : 'O';
          }
          return square;
        });
      });
      setXNext(prev => {
        return !prev;
      });
    }
  };

  return (
    <div className="app">
      <h1 className="heading">Tic Tac Toe </h1>
      <h2>message</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
