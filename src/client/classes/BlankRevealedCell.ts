import CellAbstract from './CellAbstract'
import CellType from "./CellTypeEnum";

class BlankRevealed extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.BLANK_REVEALED
    this.isRevealed = true;
  }
}

export default BlankRevealed
