import React, { useEffect } from 'react';
import game from '../classes/game/newGame';
import GameBoardComponent from './GameBoard';

function GameContainer() {
  useEffect(() => {
    // console.log('board', game.gameBoard.board.flat().map((cell) => cell.coor));
    // console.log('test: ', game.gameBoard.board[2][6]);
  }, []);

  return (
    <div className="game-container">
      <GameBoardComponent game={game} />
    </div>
  );
}

export default GameContainer;
