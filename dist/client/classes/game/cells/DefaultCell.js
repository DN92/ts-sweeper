import CellAbstract from './CellAbstract';
import cellType from './cellTypeEnum';
import cellStyles from './styleEnums';
class DefaultCell extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = cellType.UNSET;
        this.style = cellStyles.blankHidden;
    }
}
export default DefaultCell;
//# sourceMappingURL=DefaultCell.js.map