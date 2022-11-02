import React, { useState, MouseEvent, FocusEvent } from 'react';
import GameMain from '../classes/game/GameMain';
import GameBoardRow from './GameBoardRow';
import useClickTracker from '../hooks/useClickTracker';
import CellAbstract from '../classes/game/cells/CellAbstract';

type props = {
  game: GameMain
}

function GameBoardComponent({ game }:props) {
  const [clickTracker, checkMouseDown, checkMouseUp, resetClickTracker] = useClickTracker();
  const [currentCell, setCurrentCell] = useState<CellAbstract | null>(null);

  const handleMouseOver = (event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) => {
    // console.log(event);

    // if (event.target.getAttribute('cell-coor')) {
    //   const [x, y] = event.target.getAttribute('cell-coor').split(':');
    //   setCurrentCell(gameBoard.getCell(x, y));
    // }
  };

  return (
    <div
      className="game-board"
      // onMouseUp={(e) => handleMouseUp(e)}
      // onMouseLeave={handleMouseLeave}
      // onMouseDown={(e) => handleMouseDown(e)}
      onMouseOver={(e) => handleMouseOver(e)}
      onFocus={(e) => handleMouseOver(e)}
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
