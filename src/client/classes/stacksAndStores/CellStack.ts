import CellAbstract from '../game/cells/CellAbstract';

type CellConstructor = new(x: number | null, y: number | null) => CellAbstract

class CellStack {
  size: number;
  cellStack: CellAbstract[];
  constructor(CellConstructor: CellConstructor, size: number) {
    this.size = size > -1 ? size : 0;
    this.cellStack = new Array(size).fill(new CellConstructor(null, null));
  }

  takeCell([x, y]: [number, number]): CellAbstract {
    const cell: CellAbstract | undefined = this.cellStack.pop();
    if (cell) cell.setCoor(x, y);
    return cell || new CellAbstract(x, y);
  }

  returnCell(cell: CellAbstract): void {
    cell.reset();
    this.cellStack.push(cell);
  }

  fillStore(): void {
    while (this.cellStack.length < this.size) {
      this.cellStack.push(new CellAbstract(null, null));
    }
  }

  emptyStore(): void {
    this.cellStack = [];
  }
}

export default CellStack;
