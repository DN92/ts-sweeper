import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';
class BombFlagged extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.BOMB_FLAGGED;
        this.style = cellStyles.bombFlagged;
    }
}
export default BombFlagged;
//# sourceMappingURL=BombFlaggedCell.js.map