import { jsx as _jsx } from "react/jsx-runtime";
import GameCell from './GameCell';
function GameBoardRow({ game, yCoor }) {
    return (_jsx("div", { children: game.gameBoard.board[yCoor].map((cell, idx) => (_jsx(GameCell, { game: game, yCoor: yCoor, xCoor: idx }, idx))) }));
}
export default GameBoardRow;
//# sourceMappingURL=GameBoardRow.js.map