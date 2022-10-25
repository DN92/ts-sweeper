import React from 'react';
import GameMain from '../classes/game/GameMain';
import GameCell from './GameCell';

type props = {
  game: GameMain,
  yCoor: number,
}

function GameBoardRow({ game, yCoor }: props) {
  return (
    <div>
      {game.gameBoard.board[yCoor].map((cell, idx) => (
        <GameCell
          key={idx}
          game={game}
          yCoor={yCoor}
          xCoor={idx}
        />
      ))}
    </div>
  );
}

export default GameBoardRow;
