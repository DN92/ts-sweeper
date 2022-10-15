import cellAbstract from "client/classes/BombHiddenCell";
import CellAbstract from "client/classes/CellAbstract";

interface GameOptions {
  bombs: number,
}

type CellConstructor = new(x: number | null, y: number | null ) => CellAbstract

class CellStack{
  gameOptions: GameOptions
  cellStack: CellAbstract[]
  constructor(gameOptions: GameOptions, cellConstructor: CellConstructor) {
    this.gameOptions = gameOptions
    this.cellStack = new Array(gameOptions.bombs).fill(new cellConstructor(null, null))
  }

  takeCell(x: number, y:number): cellAbstract {
    const cell: cellAbstract | undefined = this.cellStack.pop()
    if (cell) cell.setCoor(x, y)
    return cell ? cell : new cellAbstract(x, y)
  }

  returnCell(cell: cellAbstract): void {
    this.cellStack.push(cell)
  }

  fillStore(): void {
    while(this.cellStack.length < this.gameOptions.bombs) {
      this.cellStack.push(new cellAbstract(null, null))
    }
  }

  emptyStore(): void {
    while(this.cellStack.length) {
      this.cellStack = []
    }
  }
}

export default CellStack
