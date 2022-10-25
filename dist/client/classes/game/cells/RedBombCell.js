import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';
class RedBomb extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.RED_BOMB;
        this.style = cellStyles.redBomb;
    }
}
export default RedBomb;
//# sourceMappingURL=RedBombCell.js.map