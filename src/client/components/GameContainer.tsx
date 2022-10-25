import React, { useRef, useState, useReducer, useEffect, useCallback } from 'react';
import game from '../classes/game/newGame';
import GameBoardComponent from './GameBoard';
import GameMain from '../classes/game/GameMain';

function GameContainer() {
  return (
    <div>
      <GameBoardComponent game={game} />
    </div>
  );
}

export default GameContainer;
