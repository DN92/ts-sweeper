import CellAbstract from '../game/cells/CellAbstractClass';

type CellConstructor = new(x: number | null, y: number | null) => CellAbstract

class CellStack {
  size: number;
  stack: CellAbstract[];
  CellConstructor: CellConstructor;
  constructor(Constructor: CellConstructor, size: number) {
    this.CellConstructor = Constructor;
    this.size = size > -1 ? size : 0;
    this.stack = [];
    while (this.stack.length < size) {
      this.stack.push(new Constructor(null, null));
    }
  }

  takeCell([x, y]: [number, number]): CellAbstract {
    const cell: CellAbstract | undefined = this.stack.pop();
    if (cell) cell.setCoor(x, y);
    return cell || new this.CellConstructor(x, y);
  }

  addCell(): void {
    this.stack.push(new this.CellConstructor(null, null));
  }

  returnCell(cell: CellAbstract): void {
    cell.reset();
    this.stack.push(cell);
  }

  fillStack(): void {
    while (this.stack.length < this.size) {
      this.stack.push(new CellAbstract(null, null));
    }
  }

  emptyStack(): void {
    this.stack = [];
  }
}

export default CellStack;
