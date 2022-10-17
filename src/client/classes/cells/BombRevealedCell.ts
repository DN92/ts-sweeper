import CellAbstract from './CellAbstract'
import CellType from './cellTypeEnum'
import cellStyles from './styleEnums';

class BombRevealed extends CellAbstract {
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = CellType.BOMB_REVEALED;
    this.hasBomb = true;
    this.isRevealed = true;
    this.style = cellStyles.blankRevealed;
  }
}

export default BombRevealed
