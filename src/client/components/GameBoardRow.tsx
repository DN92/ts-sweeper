import React from 'react';
import GameMain from '../classes/game/GameMainClass';
import GameCell from './GameCell';

type props = {
  game: GameMain,
  yCoor: number,
}

function GameBoardRow({ game, yCoor }: props) {
  return (
    <div
      className="game-board-row"
    >
      {game.gameBoard.board[yCoor].map((_cell, idx) => (
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
