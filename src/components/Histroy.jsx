import React from 'react';

const Histroy = ({ histroy, moveTo, currentMove }) => {
  return (
    <ol>
      {histroy.map((_, move) => {
        return (
          <li
            key={move}
            className={`list ${move === currentMove ? 'active' : ''}`}
          >
            <button
              className="histroyBtn"
              style={{
                fontWeight: move === currentMove ? 700 : 400,
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'GO TO START' : `GO TO MOVE #${move}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default Histroy;
