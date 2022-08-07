import React, { useState } from 'react';
import Board from './components/Board';
import calculateWinner from './Helpers';
import './styles/root.scss';

const App = () => {
  const [histroy, setHistroy] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = histroy[currentMove];

  console.log(histroy);

  const winner = calculateWinner(current.board);
  const message = winner
    ? `The winner is ${winner}`
    : `The next player is  ${current.isNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    } else {
      setHistroy(prev => {
        const last = prev[prev.length - 1];
        const newBoard = last.board.map((square, pos) => {
          if (pos === position) {
            return last.isNext ? 'X' : 'O';
          }
          return square;
        });

        return prev.concat({ board: newBoard, isNext: !last.isNext });
      });
    }
    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1 className="heading">Tic Tac Toe </h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
