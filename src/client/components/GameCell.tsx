import React from 'react';
import GameMain from "../classes/game/GameMain";

interface props {
  game: GameMain
}

function GameCell({game}: props) {

  return (
  <div
  className="game-board-cell"

  >

  </div>)
}

export default GameCell
