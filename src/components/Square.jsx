import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        fontWeight: isWinningSquare ? '700' : '500',
        color: isWinningSquare ? '#311D3F' : '#FFF',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
