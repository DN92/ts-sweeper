import CellAbstract from './CellAbstract';
import CellType from "./cellTypeEnum";
import cellStyles from './styleEnums';
class BlankRevealed extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.BLANK_REVEALED;
        this.style = cellStyles.blankRevealed;
    }
}
export default BlankRevealed;
//# sourceMappingURL=BlankRevealedCell.js.map