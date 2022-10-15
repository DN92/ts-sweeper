import CellAbstract from './CellAbstract'
import CellType from './cellTypeEnum'
import cellStyles from './styleEnums';

class BombHidden extends CellAbstract {
  type: CellType;
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = CellType.BOMB_HIDDEN;
    this.hasBomb = true;
    this.style = cellStyles.bombHidden
  }
}

export default BombHidden
