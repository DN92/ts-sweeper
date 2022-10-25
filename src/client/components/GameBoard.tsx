import React, { useState, useEffect, useMemo } from 'react';
import GameMain from "../classes/game/GameMain";
import GameBoardRow from './GameBoardRow'

interface props {
  game: GameMain
}

function GameBoardComponent({game}:props){

///  STOPPED HERE

  return (
    <div>
      {game.gameBoard.board.map((row, idx) => (
        <GameBoardRow
          key={idx}
          game={game}
          yCoor={idx}
        />
      ))}
    </div>
  )
}

export default GameBoardComponent
