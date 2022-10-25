import CellAbstract from './CellAbstract';
import CellType from "./cellTypeEnum";
import cellStyles from './styleEnums';
class BlankHidden extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.BLANK_HIDDEN;
        this.style = cellStyles.blankHidden;
    }
}
export default BlankHidden;
//# sourceMappingURL=BlankHiddenCell.js.map