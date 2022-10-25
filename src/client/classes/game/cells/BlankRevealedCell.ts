import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';

class BlankRevealed extends CellAbstract {
  constructor(x: number | null, y: number | null) {
    super(x, y);
    this.type = CellType.BLANK_REVEALED;
    this.style = cellStyles.blankRevealed;
  }
}

export default BlankRevealed;
