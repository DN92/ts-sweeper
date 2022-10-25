import { jsx as _jsx } from "react/jsx-runtime";
import GameBoardRow from './GameBoardRow';
function GameBoardComponent({ game }) {
    ///  STOPPED HERE
    return (_jsx("div", { children: game.gameBoard.board.map((row, idx) => (_jsx(GameBoardRow, { game: game, yCoor: idx }, idx))) }));
}
export default GameBoardComponent;
//# sourceMappingURL=GameBoard.js.map