import CellAbstract from './CellAbstract'
import CellType from "./CellTypeEnum";

class BlankFlagged extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.BLANK_FLAGGED
    this.isFlagged = true;
  }
}

export default BlankFlagged
