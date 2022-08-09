import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `The winner is ${winner}`
  // : `The next player is  ${current.isNext ? 'X' : 'O'}`
  const noMovesLeft = current.board.every(el => {
    return el != null;
  });
  return (
    <h2>
      {winner && `The winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `next player is ${current.isNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `It's a Tie`}
    </h2>
  );
};

export default StatusMessage;
