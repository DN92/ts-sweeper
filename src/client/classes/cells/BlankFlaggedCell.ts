import CellAbstract from './CellAbstract'
import CellType from "./cellTypeEnum";
import cellStyles from './styleEnums';

class BlankFlagged extends CellAbstract {
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = CellType.BLANK_FLAGGED
    this.isFlagged = true;
    this.style = cellStyles.blankFlagged;
  }
}

export default BlankFlagged
