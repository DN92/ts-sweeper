import React, { useState, useEffect, useMemo } from 'react';
import GameMain from "../classes/game/GameMain";

interface props {
  game: GameMain
}

function GameBoardComponent({game}:props){



  return (
    <div>
      {game.gameBoard.board.map((row, idx) => (
        key={idx}
      ))}
    </div>
  )
}

export default GameBoardComponent
