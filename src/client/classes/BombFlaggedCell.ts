import CellAbstract from './CellAbstract'
import CellType from './CellTypeEnum'

class BombFlagged extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.BOMB_FLAGGED;
    this.hasBomb = true;
    this.isFlagged = true;
  }
}

export default BombFlagged
