import React, { useMemo } from 'react';
import GameMain from "../classes/game/GameMain";
import GameCell from './GameCell'

interface props {
  game: GameMain
}

function GameBoardRow({game}: props) {

  return (
    <div>
      <GameCell game={game} />
    </div>
  )
}

export default GameBoardRow
