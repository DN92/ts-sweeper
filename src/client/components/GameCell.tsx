import React, { useState, useMemo, useEffect } from 'react';
import GameMain from '../classes/game/GameMainClass';
import CellAbstract from '../classes/game/cells/CellAbstractClass';
import useClickTracker from '../hooks/useClickTracker';

type props = {
  game: GameMain,
  yCoor: number,
  xCoor: number,
}

function GameCell({ game, xCoor, yCoor }: props) {
  const [clickTracker, checkMouseDown, checkMouseUp, resetClickTracker] = useClickTracker();

  const cellCoor = `${yCoor}:${xCoor}`;
  const [cell, setCell] = useState<CellAbstract>(game.gameBoard.board[yCoor][xCoor]);
  // console.log('cell from state after init', cell.getCoors());

  const refreshCell = (): void => {
    setCell(game.gameBoard.board[yCoor][xCoor]);
  };

  useEffect(() => {
    if (cell.coor.xCoor === null || cell.coor.yCoor === null) console.log('Cell now has null');
  }, [cell]);

  return (
    <button
      className="game-board-cell"
      cell-coor={cellCoor}
      style={cell.style.css}
      type="button"
      onClick={() => {
        console.log('cell from state', cell);
        game.openCell(cell);
        refreshCell();
        // console.log('baord, ', game.gameBoard.board.flat().map((cell) => cell.adjBombCount));
      }}
    >
      {cell.hasBomb() ?
        <img src="public/images/mine1.jpg" alt="mine" />
        :
        cell.adjBombCount}

      {/* {cell.style.image ? (
        <img
          cell-coor={cellCoor}
          src={cell.style.image}
          alt="flag"
        />
      )
        : (
          <p
            className="game-board-cell-text"
            cell-coor={cellCoor}
          >
            {(cell.isRevealed() && cell.getAdjBombCount() > 0) ? cell.getAdjBombCount() : '-1'}
          </p>
        )} */}

      {/* {cell.hasBomb() ? <img src="public/images/mine1.jpg" alt="bomb" /> : cell.getAdjBombCount() } */}
    </button>
  );
}

export default GameCell;
