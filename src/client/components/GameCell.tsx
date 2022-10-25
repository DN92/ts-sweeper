import React, { useMemo } from 'react';
import GameMain from "../classes/game/GameMain";
import CellAbstract from '../classes/game/cells/CellAbstract'

interface props {
  game: GameMain,
  yCoor: number,
  xCoor: number,
}

function GameCell({game, xCoor, yCoor}: props) {

  const cell: CellAbstract = useMemo(() => (
   game.gameBoard.board[yCoor][xCoor]
  ), [game.gameBoard.board[yCoor][xCoor]])

  const isRevealed: boolean = useMemo(() => (
    cell.isRevealed()
  ), [cell])

  const adjBombs: number = useMemo(() => (
    cell.getAdjBombCount()
  ), [cell])

  return (
  <button
    className="game-board-cell"
    cell-coor={`${xCoor}:${yCoor}`}
  >
    {cell.style.image ? (
      <img
        cell-coor={`${xCoor}:${yCoor}`}
        src={cell.style.image}
      />
    )
    :
    (
      <p
        className="game-board-cell-text"
        cell-coor={`${xCoor}:${yCoor}`}
        style={cell.style.css}
      >
        {isRevealed && adjBombs > 0 ? adjBombs : ''}
      </p>
    )

  }

  </button>)
}

export default GameCell
