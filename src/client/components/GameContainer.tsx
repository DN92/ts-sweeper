import React from 'react';
import game from '../classes/game/newGame';
import GameBoardComponent from './GameBoard';

function GameContainer() {
  return (
    <div className="game-container">
      <GameBoardComponent game={game} />
    </div>
  );
}

export default GameContainer;
