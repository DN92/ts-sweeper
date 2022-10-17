import CellStack from '../stacksAndStores/CellStack'
import CellAbstract from '../cells/CellAbstract'
import BlankFlaggedCell from '../cells/BlankFlaggedCell'
import BlankHiddenCell from '../cells/BlankHiddenCell';
import BlankRevealedCell from '../cells/BlankRevealedCell';
import BombFlaggedCell from '../cells/BombFlaggedCell';
import BombHiddenCell from '../cells/BombHiddenCell';
import BombRevealedCell from '../cells/BombRevealedCell';
import RedBombCell from '../cells/RedBombCell';
import DefaultCell from '../cells/DefaultCell';
import CellType from '../cells/cellTypeEnum'

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
    this.blankFlaggedCellStack = new CellStack(BlankFlaggedCell, sizeOptions.blankFlagged)
    this.blankHiddenCellStack = new CellStack(BlankHiddenCell, sizeOptions.blankHidden)
    this.blankRevealedCellStack = new CellStack(BlankRevealedCell, sizeOptions.blankRevealed)
    this.bombFlaggedCellStack = new CellStack(BombFlaggedCell, sizeOptions.bombFlagged)
    this.bombHiddenCellStack = new CellStack(BombHiddenCell, sizeOptions.bombHidden)
    this.bombRevealedCellStack = new CellStack(BombRevealedCell, sizeOptions.bombRevealed)
    this.redBombCellStack = new CellStack(RedBombCell, sizeOptions.redBombs)
    this.defaultCellStack = new CellStack(DefaultCell, sizeOptions.defaultCells)
  }

  getCell(cellType: string, location: [number, number]): CellAbstract {
    switch (cellType) {
      case CellType.BLANK_HIDDEN:
        return this.blankHiddenCellStack.takeCell(location)
      case CellType.BLANK_FLAGGED:
        return this.blankFlaggedCellStack.takeCell(location)
      case CellType.BLANK_REVEALED:
        return this.blankRevealedCellStack.takeCell(location)
      case CellType.BOMB_HIDDEN:
        return this.bombHiddenCellStack.takeCell(location)
      case CellType.BOMB_FLAGGED:
        return this.bombFlaggedCellStack.takeCell(location)
      case CellType.BLANK_REVEALED:
        return this.bombRevealedCellStack.takeCell(location)
      case CellType.RED_BOMB:
        return this.redBombCellStack.takeCell(location)
      case CellType.UNSET:
        return this.defaultCellStack.takeCell(location)
      default:
        return this.defaultCellStack.takeCell(location)
    }
  }

  returnCell(cell: CellAbstract): void {
    switch (cell.type) {
      case CellType.BLANK_HIDDEN:
        return this.blankHiddenCellStack.returnCell(cell)
      case CellType.BLANK_FLAGGED:
        return this.blankFlaggedCellStack.returnCell(cell)
      case CellType.BLANK_REVEALED:
        return this.blankRevealedCellStack.returnCell(cell)
      case CellType.BOMB_HIDDEN:
        return this.bombHiddenCellStack.returnCell(cell)
      case CellType.BOMB_FLAGGED:
        return this.bombFlaggedCellStack.returnCell(cell)
      case CellType.BLANK_REVEALED:
        return this.bombRevealedCellStack.returnCell(cell)
      case CellType.RED_BOMB:
        return this.redBombCellStack.returnCell(cell)
      case CellType.UNSET:
        return this.defaultCellStack.returnCell(cell)
      default:
        return this.defaultCellStack.returnCell(cell)
    }
  }

  fillStack(cellType: string): void {
    switch (cellType) {
      case CellType.BLANK_HIDDEN:
        return this.blankHiddenCellStack.fillStore()
      case CellType.BLANK_FLAGGED:
        return this.blankFlaggedCellStack.fillStore()
      case CellType.BLANK_REVEALED:
        return this.blankRevealedCellStack.fillStore()
      case CellType.BOMB_HIDDEN:
        return this.bombHiddenCellStack.fillStore()
      case CellType.BOMB_FLAGGED:
        return this.bombFlaggedCellStack.fillStore()
      case CellType.BLANK_REVEALED:
        return this.bombRevealedCellStack.fillStore()
      case CellType.RED_BOMB:
        return this.redBombCellStack.fillStore()
      case CellType.UNSET:
        return this.defaultCellStack.fillStore()
      default:
        return this.defaultCellStack.fillStore()
    }
  }

  emptyStack(cellType: string): void {
    switch (cellType) {
      case CellType.BLANK_HIDDEN:
        return this.blankHiddenCellStack.emptyStore()
      case CellType.BLANK_FLAGGED:
        return this.blankFlaggedCellStack.emptyStore()
      case CellType.BLANK_REVEALED:
        return this.blankRevealedCellStack.emptyStore()
      case CellType.BOMB_HIDDEN:
        return this.bombHiddenCellStack.emptyStore()
      case CellType.BOMB_FLAGGED:
        return this.bombFlaggedCellStack.emptyStore()
      case CellType.BLANK_REVEALED:
        return this.bombRevealedCellStack.emptyStore()
      case CellType.RED_BOMB:
        return this.redBombCellStack.emptyStore()
      case CellType.UNSET:
        return this.defaultCellStack.emptyStore()
      default:
        return this.defaultCellStack.emptyStore()
    }
  }
}

export default CellStackManager
