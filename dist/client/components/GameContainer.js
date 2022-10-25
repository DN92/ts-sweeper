import { jsx as _jsx } from "react/jsx-runtime";
import game from 'client/classes/game/newGame';
import GameBoardComponent from './GameBoard';
function GameContainer() {
    return (_jsx("div", { children: _jsx(GameBoardComponent, { game: game }) }));
}
export default GameContainer;
//# sourceMappingURL=GameContainer.js.map