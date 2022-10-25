import CellAbstract from './CellAbstract';
import CellType from "./cellTypeEnum";
import cellStyles from './styleEnums';
class BlankFlagged extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.BLANK_FLAGGED;
        this.style = cellStyles.blankFlagged;
    }
}
export default BlankFlagged;
//# sourceMappingURL=BlankFlaggedCell.js.map