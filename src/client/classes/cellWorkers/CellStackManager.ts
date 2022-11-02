import CellStack from '../stacksAndStores/CellStack';
import CellAbstract from '../game/cells/CellAbstract';
import BlankFlaggedCell from '../game/cells/BlankFlaggedCell';
import BlankHiddenCell from '../game/cells/BlankHiddenCell';
import BlankRevealedCell from '../game/cells/BlankRevealedCell';
import BombFlaggedCell from '../game/cells/BombFlaggedCell';
import BombHiddenCell from '../game/cells/BombHiddenCell';
import BombRevealedCell from '../game/cells/BombRevealedCell';
import RedBombCell from '../game/cells/RedBombCell';
import DefaultCell from '../game/cells/DefaultCell';
import CellType from '../game/cells/cellTypeEnum';

interface sizeOptions {
  blankFlagged: number,
  blankHidden: number,
  blankRevealed: number,
  bombFlagged: number,
  bombHidden: number,
  bombRevealed: number,
  redBombs: number,
  defaultCells: number,
}

class CellStackManager {
  blankFlaggedCellStack: CellStack;
  blankHiddenCellStack: CellStack;
  blankRevealedCellStack: CellStack;
  bombFlaggedCellStack: CellStack;
  bombHiddenCellStack: CellStack;
  bombRevealedCellStack: CellStack;
  redBombCellStack: CellStack;
  defaultCellStack: CellStack;
  constructor(sizeOptions: sizeOptions) {
    this.blankFlaggedCellStack = new CellStack(BlankFlaggedCell, sizeOptions.blankFlagged);
    this.blankHiddenCellStack = new CellStack(BlankHiddenCell, sizeOptions.blankHidden);
    this.blankRevealedCellStack = new CellStack(BlankRevealedCell, sizeOptions.blankRevealed);
    this.bombFlaggedCellStack = new CellStack(BombFlaggedCell, sizeOptions.bombFlagged);
    this.bombHiddenCellStack = new CellStack(BombHiddenCell, sizeOptions.bombHidden);
    this.bombRevealedCellStack = new CellStack(BombRevealedCell, sizeOptions.bombRevealed);
    this.redBombCellStack = new CellStack(RedBombCell, sizeOptions.redBombs);
    this.defaultCellStack = new CellStack(DefaultCell, sizeOptions.defaultCells);
  }

  getCell(cellType: CellType, location: [number, number]): CellAbstract {
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
    case CellType.BOMB_REVEALED:
      return this.bombRevealedCellStack.takeCell(location);
    case CellType.RED_BOMB:
      return this.redBombCellStack.takeCell(location);
    case CellType.UNSET:
      return this.defaultCellStack.takeCell(location);
    default:
      return this.defaultCellStack.takeCell(location);
    }
  }

  returnCell(cell: CellAbstract): void {
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
    case CellType.BOMB_REVEALED:
      return this.bombRevealedCellStack.returnCell(cell);
    case CellType.RED_BOMB:
      return this.redBombCellStack.returnCell(cell);
    case CellType.UNSET:
      return this.defaultCellStack.returnCell(cell);
    default:
      return this.defaultCellStack.returnCell(cell);
    }
  }

  fillStack(cellType: string): void {
    switch (cellType) {
    case CellType.BLANK_HIDDEN:
      return this.blankHiddenCellStack.fillStack();
    case CellType.BLANK_FLAGGED:
      return this.blankFlaggedCellStack.fillStack();
    case CellType.BLANK_REVEALED:
      return this.blankRevealedCellStack.fillStack();
    case CellType.BOMB_HIDDEN:
      return this.bombHiddenCellStack.fillStack();
    case CellType.BOMB_FLAGGED:
      return this.bombFlaggedCellStack.fillStack();
    case CellType.BOMB_REVEALED:
      return this.bombRevealedCellStack.fillStack();
    case CellType.RED_BOMB:
      return this.redBombCellStack.fillStack();
    case CellType.UNSET:
      return this.defaultCellStack.fillStack();
    default:
      return this.defaultCellStack.fillStack();
    }
  }

  emptyStack(cellType: string): void {
    switch (cellType) {
    case CellType.BLANK_HIDDEN:
      return this.blankHiddenCellStack.emptyStack();
    case CellType.BLANK_FLAGGED:
      return this.blankFlaggedCellStack.emptyStack();
    case CellType.BLANK_REVEALED:
      return this.blankRevealedCellStack.emptyStack();
    case CellType.BOMB_HIDDEN:
      return this.bombHiddenCellStack.emptyStack();
    case CellType.BOMB_FLAGGED:
      return this.bombFlaggedCellStack.emptyStack();
    case CellType.BOMB_REVEALED:
      return this.bombRevealedCellStack.emptyStack();
    case CellType.RED_BOMB:
      return this.redBombCellStack.emptyStack();
    case CellType.UNSET:
      return this.defaultCellStack.emptyStack();
    default:
      return this.defaultCellStack.emptyStack();
    }
  }
}

export default CellStackManager;
