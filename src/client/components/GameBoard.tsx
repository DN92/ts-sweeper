import React from 'react';
import GameMain from '../classes/game/GameMain';
import GameBoardRow from './GameBoardRow';

type props = {
  game: GameMain
}

function GameBoardComponent({ game }:props) {
  ///  STOPPED HERE

  return (
    <div>
      {game.gameBoard.board.map((_row, idx) => (
        <GameBoardRow
          key={idx}
          game={game}
          yCoor={idx}
        />
      ))}
    </div>
  );
}

export default GameBoardComponent;
