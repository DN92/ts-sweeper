import CellType from './cellTypeEnum';
import cellStyles from './styleEnums';
import CellCSSandImage from './CellCSSandImage';

let counter = 1;

interface Coor {
  xCoor: number | null,
  yCoor: number | null,
}

class CellAbstract {
  id: number;
  coor: Coor;
  type: CellType;
  adjBombCount: number;
  hasBeenTried: boolean;
  style: CellCSSandImage;
  constructor(x: number | null, y: number | null) {
    this.id = counter;
    counter++;
    this.coor = { xCoor: x, yCoor: y };
    this.type = CellType.UNSET;
    this.adjBombCount = -1;
    this.hasBeenTried = false;
    this.style = cellStyles.blankHidden;
  }

  getAdjBombCount(): number {
    return this.adjBombCount;
  }

  isRevealed(): boolean {
    return [
      CellType.BLANK_REVEALED,
      CellType.BOMB_REVEALED,
      CellType.RED_BOMB,
    ].includes(this.type);
  }

  isHidden(): boolean {
    return [
      CellType.BLANK_HIDDEN,
      CellType.BOMB_HIDDEN,
      CellType.UNSET,
      CellType.BLANK_FLAGGED,
      CellType.BOMB_FLAGGED,
    ].includes(this.type);
  }

  isFlagged(): boolean {
    return [
      CellType.BLANK_FLAGGED,
      CellType.BOMB_FLAGGED,
    ].includes(this.type);
  }

  hasBomb(): boolean {
    return [
      CellType.BOMB_FLAGGED,
      CellType.BOMB_HIDDEN,
      CellType.BOMB_REVEALED,
      CellType.RED_BOMB,
    ].includes(this.type);
  }

  isTried(): boolean {
    return this.hasBeenTried;
  }

  getType(): CellType {
    return this.type;
  }

  getCoors(): [number | null, number | null] {
    return [this.coor.xCoor, this.coor.yCoor];
  }

  setAdjBombCount(bombs: number): void {
    this.adjBombCount = bombs;
  }

  setCoor(x: number, y: number): void {
    this.coor.xCoor = x;
    this.coor.yCoor = y;
  }

  setTried(): void {
    this.hasBeenTried = true;
  }

  isSafe(): boolean {
    return !this.hasBomb();
  }

  adoptProps(otherCell: CellAbstract): void {
    this.adjBombCount = otherCell.adjBombCount;
    this.coor = otherCell.coor;
    this.hasBeenTried = otherCell.hasBeenTried;
  }

  reset(): void {
    this.coor.xCoor = null;
    this.coor.yCoor = null;
    this.adjBombCount = -1;
    this.hasBeenTried = false;
  }
}

export default CellAbstract;
