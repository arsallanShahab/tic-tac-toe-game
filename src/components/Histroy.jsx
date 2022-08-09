import React from 'react';

const Histroy = ({ histroy, moveTo, currentMove }) => {
  return (
    <div className="wrapper">
      <p className="game-histroy">GAME HISTROY</p>
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
    </div>
  );
};

export default Histroy;
