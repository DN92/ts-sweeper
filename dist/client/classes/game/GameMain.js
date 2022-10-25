import GameBoard from "./GameBoard";
import gamePresets from "./gamePresets";
import CellType from './cells/cellTypeEnum';
import { gameStatus } from './@types';
class GameMain {
    constructor() {
        this.gameBoard = new GameBoard(gamePresets.default);
        this.firstMove = true;
        this.status = gameStatus.READY;
        this.clock = {
            time: '000',
            running: false
        };
    }
    checkWon() {
        return this.gameBoard.isCleared();
    }
    checkLost() {
        return this.gameBoard.containsRedBomb();
    }
    setGameStatus(status) {
        this.status = status;
    }
    deriveGameStatus() {
        if (this.checkWon())
            return 2;
        if (this.checkLost())
            return -1;
        return 1;
    }
    runClock() {
        this.clock.running = true;
    }
    stopClock() {
        this.clock.running = false;
    }
    resetClock() {
        this.clock.time = '000';
        this.clock.running = false;
    }
    resetGame() {
        this.gameBoard.resetBoard();
        this.resetClock();
        this.status = gameStatus.READY;
    }
    openCell(gameCell) {
        const openBombCell = (gameCell) => {
            if (this.firstMove) {
                this.firstMove = false;
                gameCell = this.gameBoard.swapOutBomb(gameCell); // swapOutBomb returns the new cell
                this.gameBoard.handleRevealing(gameCell);
            }
            else {
                //  else place the red bomb & game over signal
                this.gameBoard.replaceCell(gameCell, CellType.RED_BOMB);
            }
            gameCell.setTried();
            this.firstMove = false;
        };
        const openHiddenCell = (gameCell) => {
            this.firstMove = false;
            gameCell.setTried();
            this.gameBoard.handleRevealing(gameCell);
            if (gameCell.getAdjBombCount() === 0) {
                this.gameBoard.getAdjCells(gameCell).forEach(cell => {
                    this.openCell(cell);
                });
            }
        };
        const openRevealedCell = (gameCell) => {
            this.firstMove = false;
            gameCell.setTried();
            const adjFlags = this.gameBoard.getAdjFlagCount(gameCell);
            if (!(adjFlags === gameCell.getAdjBombCount()))
                return;
            const adjCells = this.gameBoard.getAdjCells(gameCell);
            adjCells.forEach(cell => {
                if (cell.isTried())
                    return;
                this.gameBoard.handleRevealing(cell);
            });
        };
        //  if flagged, do nothing
        if (gameCell.isFlagged())
            return;
        if (gameCell.hasBomb()) {
            openBombCell(gameCell);
            return;
        }
        if (gameCell.isHidden()) {
            openHiddenCell(gameCell);
            return;
        }
        if (gameCell.isRevealed()) {
            openRevealedCell(gameCell);
            return;
        }
    }
}
export default GameMain;
//# sourceMappingURL=GameMain.js.map