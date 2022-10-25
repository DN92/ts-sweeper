import React from 'react';
import GameMain from '../classes/game/GameMain';
import GameBoardRow from './GameBoardRow';

type props = {
  game: GameMain
}

function GameBoardComponent({ game }:props) {
  ///  STOPPED HERE

  return (
    <div
      className="game-board"
      // onMouseUp={(e) => handleMouseUp(e)}
      // onMouseLeave={handleMouseLeave}
      // onMouseDown={(e) => handleMouseDown(e)}
      // onMouseOver={(e) => handleMouseOver(e)}
      // onFocus={(e) => handleMouseOver(e)}
      // tabIndex={0}
      // draggable={false}
    >
      {game.gameBoard.board.map((_row, idx) => (
        <GameBoardRow
          key={idx}
          game={game}
          yCoor={idx}
        />
      ))}
    </div>
  );
}

export default GameBoardComponent;
