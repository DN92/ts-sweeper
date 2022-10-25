import React, { useState, useMemo } from 'react';
import GameMain from '../classes/game/GameMain';
import CellAbstract from '../classes/game/cells/CellAbstract';

type props = {
  game: GameMain,
  yCoor: number,
  xCoor: number,
}

function GameCell({ game, xCoor, yCoor }: props) {
  const cellCoor = `${yCoor}:${xCoor}`;
  const [cell, setCell] = useState<CellAbstract>(game.gameBoard.board[yCoor][xCoor]);

  const isRevealed: boolean = useMemo(() => (
    cell.isRevealed()
  ), [cell]);

  const adjBombs: number = useMemo(() => (
    cell.getAdjBombCount()
  ), [cell]);

  return (
    <button
      className="game-board-cell"
      cell-coor={cellCoor}
      type="button"
      onClick={() => {
        console.log('cell: ', cell);
      }}
    >
      {cell.style.image ? (
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
            style={cell.style.css}
          >
            {isRevealed && adjBombs > 0 ? adjBombs : ''}
          </p>
        )}
    </button>
  );
}

export default GameCell;
