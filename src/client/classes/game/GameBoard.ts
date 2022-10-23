import DefaultCell from './cells/DefaultCell';
import CellAbstract from './cells/CellAbstract'
import CellStackManager from '../cellWorkers/CellStackManager'
import CellType from './cells/cellTypeEnum'
import { gameOption } from './@types'


class GameBoard {
  rows: number;
  columns: number;
  bombs: number;
  board: CellAbstract[][];
  memoryManager: CellStackManager;
  constructor(preset: gameOption ) {
    this.rows = preset.size.rows;
    this.columns = preset.size.columns;
    this.bombs = preset.bombs;
    this.board = [];
    this.memoryManager = new CellStackManager(preset.sizeOptions)
    this.generateBoard();
  }

  protected generateBoard(): void {
    const gameBoardMemo: [number, number][] = [];

    // fill 2d array with blank game cells
    for (let i = 0; i < this.rows; i++) {
      const arrayRow: CellAbstract[] = [];
      for (let j = 0; j < this.columns; j++) {
        arrayRow.push(new DefaultCell(j, i));
      }
      this.board.push(arrayRow);
    }

    //  create a reference array of all indexes in board, randomly pick one, and swap the blank cell with a bomb cell from memory manager
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        gameBoardMemo.push([i, j]);
      }
    }
    for (let i = 0; i < this.bombs; i++) {
      const randomIdx = Math.floor(Math.random() * gameBoardMemo.length);
      const [xCoor, yCoor] = gameBoardMemo[randomIdx];
      this.replaceCell(this.getBoardCell(xCoor, yCoor), CellType.BOMB_HIDDEN)
    }

    //  have each cell calculate it's adj bomb value and set
    this.board.flat()
      .forEach((cell) => {
        cell.setAdjBombCount(this.getAdjBombCount(cell));
      });
  }

  getBoardSize(): number {
    return this.board.flat().length;
  }

  getBoardCell(xCoor: number, yCoor: number): CellAbstract {
    return this.board[yCoor][xCoor];
  }

  getTotalBombs(): number {
    return this.bombs;
  }

  getTotalRedFlags(): number {
    let counter = 0;
    this.board.flat()
      .forEach((cell) => {
        if (cell.isFlagged()) counter++;
      });
    return counter;
  }

  getBombCounter(): number {
    const bombCount = this.getTotalBombs() - this.getTotalRedFlags();
    return bombCount > -1 ? bombCount : 0;
  }

  getRevealedCount(): number {
    let counter = 0;
    this.board.flat()
      .forEach((cell) => {
        if (cell.isRevealed()) counter++;
      });
    return counter;
  }

  getAdjCells(gameCell: CellAbstract): CellAbstract[] {
    const { xCoor, yCoor } = gameCell.coor;
    if (xCoor === null || yCoor === null) return [];
    const adjCells: CellAbstract[] = [];
    const possibleCells: [number, number][] = [
      [xCoor - 1, yCoor - 1],
      [xCoor, yCoor - 1],
      [xCoor + 1, yCoor - 1],
      [xCoor - 1, yCoor],
      [xCoor + 1, yCoor],
      [xCoor - 1, yCoor + 1],
      [xCoor, yCoor + 1],
      [xCoor + 1, yCoor + 1],
    ];
    possibleCells.forEach(([x, y]) => {
      if (!this.board[y] || !this.board[y][x]) return;
      adjCells.push(this.board[y][x]);
    });
    return adjCells;
  }

  getAdjFlagCount(gameCell: CellAbstract): number {
    let counter = 0;
    this.getAdjCells(gameCell).forEach((cell) => {
      if (cell.isFlagged()) counter++;
    });
    return counter;
  }

  getAdjBombCount(gameCell: CellAbstract): number {
    let counter = 0;
    this.getAdjCells(gameCell).forEach((cell) => {
      if (cell.hasBomb()) counter++;
    });
    return counter;
  }

  isCleared(): boolean {
    return this.getRevealedCount() >= (this.getBoardSize() - this.getTotalBombs());
  }

  containsRedBomb(): boolean {
    return this.board.flat().map(cell => cell.type).includes(CellType.RED_BOMB)
  }

  replaceCell(oldCell: CellAbstract, newType: CellType): void | never {
    const [x, y] = oldCell.getCoors()
    if([x, y].includes(null)) {
      throw Error ('swapCells received a null coordinates value and could not complete operations')
    }
    const newCell: CellAbstract = this.memoryManager.getCell(newType, [x, y] as [number, number])
    this.board[y as number][x as number] = newCell;
    this.memoryManager.returnCell(oldCell);
  }

  handleFlagging(cell: CellAbstract): void {
    function getOpposite(inputType: CellType): CellType {
      const transitions: Partial<Record<CellType, CellType>> = {
        [CellType.BLANK_FLAGGED]: CellType.BLANK_HIDDEN,
        [CellType.BLANK_HIDDEN]: CellType.BLANK_FLAGGED,
        [CellType.BLANK_REVEALED]: CellType.BLANK_REVEALED,
        [CellType.BOMB_FLAGGED]: CellType.BOMB_HIDDEN,
        [CellType.BOMB_HIDDEN]: CellType.BOMB_FLAGGED,
        [CellType.BOMB_REVEALED]: CellType.BOMB_REVEALED,
        [CellType.RED_BOMB]: CellType.RED_BOMB,
        [CellType.UNSET]: CellType.BLANK_FLAGGED,
      }
      return transitions[inputType] as CellType
    }
    this.replaceCell(cell, getOpposite(cell.type))
  }

  handleRevealing(cell: CellAbstract): void {
    function getOpposite(inputType: CellType): CellType {
      const transitions: Partial<Record<CellType, CellType>> = {
        [CellType.BLANK_FLAGGED]: CellType.BLANK_FLAGGED,
        [CellType.BLANK_HIDDEN]: CellType.BLANK_REVEALED,
        [CellType.BLANK_REVEALED]: CellType.BLANK_REVEALED,
        [CellType.BOMB_FLAGGED]: CellType.BOMB_FLAGGED,
        [CellType.BOMB_HIDDEN]: CellType.BOMB_REVEALED,
        [CellType.BOMB_REVEALED]: CellType.BOMB_REVEALED,
        [CellType.RED_BOMB]: CellType.RED_BOMB,
        [CellType.UNSET]: CellType.BLANK_REVEALED,
      }
      return transitions[inputType] as CellType
    }
    this.replaceCell(cell, getOpposite(cell.type))
  }

  swapCells(cell1: CellAbstract, cell2: CellAbstract): void {
    const [x1, y1]  = cell1.getCoors()
    const [x2, y2] = cell2.getCoors()
    const tempCell = this.memoryManager.getCell(CellType.UNSET, [x1 as number, y1 as number])
    tempCell.adoptProps(cell1)
    cell1.adoptProps(cell2)
    cell2.adoptProps(tempCell)
    this.board[y1 as number][x1 as number] = cell2
    this.board[y2 as number][x2 as number] = cell1
    tempCell.reset()
    this.memoryManager.returnCell
  }

  swapOutBomb(cell: CellAbstract): CellAbstract | never {
    if(!cell.hasBomb()) return cell;
    let pointerX = 0;
    let pointerY = 0;
    let qualifyingCell: CellAbstract | null = null;
    while(!qualifyingCell) {
      if(pointerY > this.board.length) break;
      const cellToCheck: CellAbstract = this.board[pointerY][pointerX]
      if(cellToCheck.isSafe()) {
        qualifyingCell = cellToCheck
      } else {
        if(pointerX > this.board[pointerY].length) {
          pointerX = 0
          pointerY++;
        } else {
          pointerX ++
        }
      }
    }
    if(!qualifyingCell) {
      throw Error('swapOutBomb Failed to find qualifying cell')
    }
    this.swapCells(qualifyingCell, cell)
    return qualifyingCell
  }

  returnAllBoardCells() {
    this.board.flat().forEach(cell => {
      this.memoryManager.returnCell(cell)
    })
  }

  resetBoard() {
    this.returnAllBoardCells()
    this.generateBoard()
  }
}

export default GameBoard;
