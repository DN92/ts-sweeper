import CellAbstract from './CellAbstract'
import CellType from './cellTypeEnum'
import cellStyles from './styleEnums'

class RedBomb extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.RED_BOMB;
    this.hasBomb = true;
    this.isRevealed = true;
    this.style = cellStyles.redBomb
  }
}

export default RedBomb
