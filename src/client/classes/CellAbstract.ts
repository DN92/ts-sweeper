import CellType from "./cellTypeEnum";
import cellStyles from "./styleEnums"
import CellCSSandImage from "./CellCSSandImage";


interface Coor {
  xCoor: number | null,
  yCoor: number | null,
}

abstract class CellAbstract {
  coor: Coor;
  type: CellType
  hasBomb: boolean;
  adjBombs: number | null;
  isFlagged: boolean;
  isRevealed: boolean;
  style: CellCSSandImage;
  constructor(x: number, y: number) {
    this.coor = { xCoor: x, yCoor: y };
    this.type = CellType.UNSET
    this.hasBomb = false;
    this.adjBombs = null;
    this.isFlagged = false;
    this.isRevealed = false;
    this.style = cellStyles.blankHidden;
  }

  getAdjBombCount() {
    return this.adjBombs;
  }

  getIsRevealed() {
    return this.isRevealed;
  }

  getIsFlagged() {
    return this.isFlagged;
  }

  setIsRevealed(bool: boolean) {
    this.isRevealed = bool;
  }

  setAdjBombCount(bombs: number) {
    this.adjBombs = bombs;
  }

  setIsFlagged(bool: boolean) {
    this.isFlagged = bool;
  }

  toggleFlagged() {
    this.isFlagged = !this.isFlagged;
  }
}

export default CellAbstract;
