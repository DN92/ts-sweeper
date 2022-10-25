import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
function GameCell({ game, xCoor, yCoor }) {
    const cell = useMemo(() => (game.gameBoard.board[yCoor][xCoor]), [game.gameBoard.board[yCoor][xCoor]]);
    const isRevealed = useMemo(() => (cell.isRevealed()), [cell]);
    const adjBombs = useMemo(() => (cell.getAdjBombCount()), [cell]);
    return (_jsx("button", Object.assign({ className: "game-board-cell", "cell-coor": `${xCoor}:${yCoor}` }, { children: cell.style.image ? (_jsx("img", { "cell-coor": `${xCoor}:${yCoor}`, src: cell.style.image }))
            :
                (_jsx("p", Object.assign({ className: "game-board-cell-text", "cell-coor": `${xCoor}:${yCoor}`, style: cell.style.css }, { children: isRevealed && adjBombs > 0 ? adjBombs : '' }))) })));
}
export default GameCell;
//# sourceMappingURL=GameCell.js.map