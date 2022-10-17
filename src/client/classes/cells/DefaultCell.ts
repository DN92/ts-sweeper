import CellAbstract from './CellAbstract'
import cellType from './cellTypeEnum'
import cellStyles from './styleEnums';

class DefaultCell extends CellAbstract {
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = cellType.UNSET;
    this.hasBomb = true;
    this.isFlagged = true;
    this.style = cellStyles.blankHidden;
  }
}

export default DefaultCell
