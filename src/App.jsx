import React, { useState } from 'react';
import Board from './components/Board';
import Histroy from './components/Histroy';
import calculateWinner from './helpers';
import StatusMessage from './components/StatusMessage';
import './styles/root.scss';

const App = () => {
  const [histroy, setHistroy] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = histroy[currentMove];

  const winner = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <div className="flex-row">
        <div>
          <h1 className="heading">
            <span>T</span>
            <span>I</span>
            <span>C</span>
            <span>.</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>.</span>
          </h1>
        </div>
        <div>
          <h1 className="heading">
            <span>T</span>
            <span>O</span>
            <span>E</span>
          </h1>
        </div>
      </div>
      <div className="container">
        <StatusMessage winner={winner} current={current} />
        <Board board={current.board} handleSquareClick={handleSquareClick} />
      </div>
      <div className="overflow">
        <Histroy histroy={histroy} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </div>
  );
};

export default App;
