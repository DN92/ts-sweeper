import CellAbstract from './CellAbstract'
import CellType from './cellTypeEnum'
import cellStyles from './styleEnums';

class BombFlagged extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.BOMB_FLAGGED;
    this.hasBomb = true;
    this.isFlagged = true;
    this.style = cellStyles.bombFlagged;
  }
}

export default BombFlagged
