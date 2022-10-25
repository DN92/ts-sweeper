import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';
class BombHidden extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.BOMB_HIDDEN;
        this.style = cellStyles.bombHidden;
    }
}
export default BombHidden;
//# sourceMappingURL=BombHiddenCell.js.map