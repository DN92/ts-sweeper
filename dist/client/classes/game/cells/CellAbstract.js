import CellType from "./cellTypeEnum";
import cellStyles from "./styleEnums";
class CellAbstract {
    constructor(x, y) {
        this.coor = { xCoor: x, yCoor: y };
        this.type = CellType.UNSET;
        this.adjBombCount = -1;
        this.hasBeenTried = false;
        this.style = cellStyles.blankHidden;
    }
    getAdjBombCount() {
        return this.adjBombCount;
    }
    isRevealed() {
        return [
            CellType.BLANK_REVEALED,
            CellType.BOMB_REVEALED,
            CellType.RED_BOMB
        ].includes(this.type);
    }
    isHidden() {
        return [
            CellType.BLANK_HIDDEN,
            CellType.BOMB_HIDDEN,
            CellType.UNSET,
            CellType.BLANK_FLAGGED,
            CellType.BOMB_FLAGGED,
        ].includes(this.type);
    }
    isFlagged() {
        return [
            CellType.BLANK_FLAGGED,
            CellType.BOMB_FLAGGED
        ].includes(this.type);
    }
    hasBomb() {
        return [
            CellType.BOMB_FLAGGED,
            CellType.BOMB_HIDDEN,
            CellType.BOMB_REVEALED,
            CellType.RED_BOMB
        ].includes(this.type);
    }
    isTried() {
        return this.hasBeenTried;
    }
    getType() {
        return this.type;
    }
    getCoors() {
        return [this.coor.xCoor, this.coor.yCoor];
    }
    setAdjBombCount(bombs) {
        this.adjBombCount = bombs;
    }
    setCoor(x, y) {
        this.coor.xCoor = x;
        this.coor.yCoor = y;
    }
    setTried() {
        this.hasBeenTried = true;
    }
    isSafe() {
        return !this.hasBomb();
    }
    adoptProps(otherCell) {
        this.adjBombCount = otherCell.adjBombCount;
        this.coor = otherCell.coor;
        this.hasBeenTried = otherCell.hasBeenTried;
    }
    reset() {
        this.coor.xCoor = null;
        this.coor.yCoor = null;
        this.adjBombCount = -1;
        this.hasBeenTried = false;
    }
}
export default CellAbstract;
//# sourceMappingURL=CellAbstract.js.map