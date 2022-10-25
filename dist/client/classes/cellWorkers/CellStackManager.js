import CellStack from '../stacksAndStores/CellStack';
import BlankFlaggedCell from '../game/cells/BlankFlaggedCell';
import BlankHiddenCell from '../game/cells/BlankHiddenCell';
import BlankRevealedCell from '../game/cells/BlankRevealedCell';
import BombFlaggedCell from '../game/cells/BombFlaggedCell';
import BombHiddenCell from '../game/cells/BombHiddenCell';
import BombRevealedCell from '../game/cells/BombRevealedCell';
import RedBombCell from '../game/cells/RedBombCell';
import DefaultCell from '../game/cells/DefaultCell';
import CellType from '../game/cells/cellTypeEnum';
class CellStackManager {
    constructor(sizeOptions) {
        this.blankFlaggedCellStack = new CellStack(BlankFlaggedCell, sizeOptions.blankFlagged);
        this.blankHiddenCellStack = new CellStack(BlankHiddenCell, sizeOptions.blankHidden);
        this.blankRevealedCellStack = new CellStack(BlankRevealedCell, sizeOptions.blankRevealed);
        this.bombFlaggedCellStack = new CellStack(BombFlaggedCell, sizeOptions.bombFlagged);
        this.bombHiddenCellStack = new CellStack(BombHiddenCell, sizeOptions.bombHidden);
        this.bombRevealedCellStack = new CellStack(BombRevealedCell, sizeOptions.bombRevealed);
        this.redBombCellStack = new CellStack(RedBombCell, sizeOptions.redBombs);
        this.defaultCellStack = new CellStack(DefaultCell, sizeOptions.defaultCells);
    }
    getCell(cellType, location) {
        switch (cellType) {
            case CellType.BLANK_HIDDEN:
                return this.blankHiddenCellStack.takeCell(location);
            case CellType.BLANK_FLAGGED:
                return this.blankFlaggedCellStack.takeCell(location);
            case CellType.BLANK_REVEALED:
                return this.blankRevealedCellStack.takeCell(location);
            case CellType.BOMB_HIDDEN:
                return this.bombHiddenCellStack.takeCell(location);
            case CellType.BOMB_FLAGGED:
                return this.bombFlaggedCellStack.takeCell(location);
            case CellType.BLANK_REVEALED:
                return this.bombRevealedCellStack.takeCell(location);
            case CellType.RED_BOMB:
                return this.redBombCellStack.takeCell(location);
            case CellType.UNSET:
                return this.defaultCellStack.takeCell(location);
            default:
                return this.defaultCellStack.takeCell(location);
        }
    }
    returnCell(cell) {
        switch (cell.type) {
            case CellType.BLANK_HIDDEN:
                return this.blankHiddenCellStack.returnCell(cell);
            case CellType.BLANK_FLAGGED:
                return this.blankFlaggedCellStack.returnCell(cell);
            case CellType.BLANK_REVEALED:
                return this.blankRevealedCellStack.returnCell(cell);
            case CellType.BOMB_HIDDEN:
                return this.bombHiddenCellStack.returnCell(cell);
            case CellType.BOMB_FLAGGED:
                return this.bombFlaggedCellStack.returnCell(cell);
            case CellType.BLANK_REVEALED:
                return this.bombRevealedCellStack.returnCell(cell);
            case CellType.RED_BOMB:
                return this.redBombCellStack.returnCell(cell);
            case CellType.UNSET:
                return this.defaultCellStack.returnCell(cell);
            default:
                return this.defaultCellStack.returnCell(cell);
        }
    }
    fillStack(cellType) {
        switch (cellType) {
            case CellType.BLANK_HIDDEN:
                return this.blankHiddenCellStack.fillStore();
            case CellType.BLANK_FLAGGED:
                return this.blankFlaggedCellStack.fillStore();
            case CellType.BLANK_REVEALED:
                return this.blankRevealedCellStack.fillStore();
            case CellType.BOMB_HIDDEN:
                return this.bombHiddenCellStack.fillStore();
            case CellType.BOMB_FLAGGED:
                return this.bombFlaggedCellStack.fillStore();
            case CellType.BLANK_REVEALED:
                return this.bombRevealedCellStack.fillStore();
            case CellType.RED_BOMB:
                return this.redBombCellStack.fillStore();
            case CellType.UNSET:
                return this.defaultCellStack.fillStore();
            default:
                return this.defaultCellStack.fillStore();
        }
    }
    emptyStack(cellType) {
        switch (cellType) {
            case CellType.BLANK_HIDDEN:
                return this.blankHiddenCellStack.emptyStore();
            case CellType.BLANK_FLAGGED:
                return this.blankFlaggedCellStack.emptyStore();
            case CellType.BLANK_REVEALED:
                return this.blankRevealedCellStack.emptyStore();
            case CellType.BOMB_HIDDEN:
                return this.bombHiddenCellStack.emptyStore();
            case CellType.BOMB_FLAGGED:
                return this.bombFlaggedCellStack.emptyStore();
            case CellType.BLANK_REVEALED:
                return this.bombRevealedCellStack.emptyStore();
            case CellType.RED_BOMB:
                return this.redBombCellStack.emptyStore();
            case CellType.UNSET:
                return this.defaultCellStack.emptyStore();
            default:
                return this.defaultCellStack.emptyStore();
        }
    }
}
export default CellStackManager;
//# sourceMappingURL=CellStackManager.js.map