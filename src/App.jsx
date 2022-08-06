import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

const App = () => (
  <div className="app">
    <h1 className="heading">Tic Tac Toe </h1>
    <Board />
  </div>
);

export default App;
