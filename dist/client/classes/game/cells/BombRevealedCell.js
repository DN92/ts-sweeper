import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';
class BombRevealed extends CellAbstract {
    constructor(x, y) {
        super(x, y);
        this.type = CellType.BOMB_REVEALED;
        this.style = cellStyles.blankRevealed;
    }
}
export default BombRevealed;
//# sourceMappingURL=BombRevealedCell.js.map