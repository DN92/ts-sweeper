import CellAbstract from './CellAbstract'
import CellType from './CellTypeEnum'

class BombHidden extends CellAbstract {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = CellType.BOMB_HIDDEN;
    this.hasBomb = true;
  }
}

export default BombHidden
