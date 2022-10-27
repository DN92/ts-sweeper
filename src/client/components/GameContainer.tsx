import React, { useEffect } from 'react';
import game from '../classes/game/newGame';
import GameBoardComponent from './GameBoard';

function GameContainer() {
  useEffect(() => {
    console.log('board', game.gameBoard.board.flat().map((cell) => cell.adjBombCount));
  }, []);

  return (
    <div className="game-container">
      <GameBoardComponent game={game} />
    </div>
  );
}

export default GameContainer;
