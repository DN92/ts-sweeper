import CellAbstract from './CellAbstract'
import CellType from "./CellTypeEnum";

class BlankHidden extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.BLANK_HIDDEN
  }
}

export default BlankHidden
