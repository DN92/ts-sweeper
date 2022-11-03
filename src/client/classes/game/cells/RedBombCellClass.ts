import CellAbstract from './CellAbstractClass';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';

class RedBomb extends CellAbstract {
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = CellType.RED_BOMB;
    this.style = cellStyles.redBomb;
  }
}

export default RedBomb;
