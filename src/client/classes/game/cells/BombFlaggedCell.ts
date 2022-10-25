import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';

class BombFlagged extends CellAbstract {
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = CellType.BOMB_FLAGGED;
    this.style = cellStyles.bombFlagged;
  }
}

export default BombFlagged;
