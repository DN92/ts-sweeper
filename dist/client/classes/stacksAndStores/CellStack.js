import CellAbstract from '../game/cells/CellAbstract';
class CellStack {
    constructor(cellConstructor, size) {
        this.size = size > -1 ? size : 0;
        this.cellStack = new Array(size).fill(new cellConstructor(null, null));
    }
    takeCell([x, y]) {
        const cell = this.cellStack.pop();
        if (cell)
            cell.setCoor(x, y);
        return cell ? cell : new CellAbstract(x, y);
    }
    returnCell(cell) {
        this.cellStack.push(cell);
    }
    fillStore() {
        while (this.cellStack.length < this.size) {
            this.cellStack.push(new CellAbstract(null, null));
        }
    }
    emptyStore() {
        this.cellStack = [];
    }
}
export default CellStack;
//# sourceMappingURL=CellStack.js.map