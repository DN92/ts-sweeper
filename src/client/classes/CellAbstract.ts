import CellType from "./cellTypeEnum";
import cellStyles from "./styleEnums"
import CellCSSandImage from "./CellCSSandImage";


interface Coor {
  xCoor: number | null,
  yCoor: number | null,
}

class CellAbstract {
  coor: Coor;
  type: CellType
  hasBomb: boolean;
  adjBombs: number | null;
  isFlagged: boolean;
  isRevealed: boolean;
  style: CellCSSandImage;
  constructor(x: number | null, y: number | null) {
    this.coor = { xCoor: x, yCoor: y };
    this.type = CellType.UNSET
    this.hasBomb = false;
    this.adjBombs = null;
    this.isFlagged = false;
    this.isRevealed = false;
    this.style = cellStyles.blankHidden;
  }

  //  TYPE OUT THESE FUNCTIONS

  getAdjBombCount(): number | null  {
    return this.adjBombs;
  }

  getIsRevealed(): boolean {
    return this.isRevealed;
  }

  getIsFlagged(): boolean {
    return this.isFlagged;
  }

  setIsRevealed(bool: boolean): void {
    this.isRevealed = bool;
  }

  setAdjBombCount(bombs: number): void {
    this.adjBombs = bombs;
  }

  setIsFlagged(bool: boolean): void {
    this.isFlagged = bool;
  }

  setCoor(x: number, y: number): void {
    this.coor.xCoor = x;
    this.coor.yCoor = y
  }

  toggleFlagged(): void {
    this.isFlagged = !this.isFlagged;
  }
}

export default CellAbstract;
