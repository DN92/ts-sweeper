import CellAbstract from '../cells/CellAbstract'

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

  takeCell(x: number, y: number): CellAbstract {
    const cell: CellAbstract | undefined = this.cellStack.pop()
    if (cell) cell.setCoor(x, y)
    return cell ? cell : new CellAbstract(x, y)
  }

  returnCell(cell: CellAbstract): void {
    this.cellStack.push(cell)
  }

  fillStore(): void {
    while(this.cellStack.length < this.gameOptions.bombs) {
      this.cellStack.push(new CellAbstract(null, null))
    }
  }

  emptyStore(): void {
    this.cellStack = []
  }
}

export default CellStack
