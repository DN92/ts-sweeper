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


  getCoors(): [number | null, number | null] {
    return [this.coor.xCoor, this.coor.yCoor];
  }

  getTried(): boolean {
    return this.hasBeenTried;
  }

  getType(): CellType {
    return this.type;
  }

  setAdjBombCount(bombs: number): void {
    this.adjBombCount = bombs;
  }

  setCoor(x: number, y: number): void {
    this.coor.xCoor = x;
    this.coor.yCoor = y;
  }

  setTried(bool: boolean): void {
    this.hasBeenTried = bool;
  }

  setTriedTrue(): void {
    this.hasBeenTried = true;
  }

  hasBomb(): boolean {
    return [
      CellType.BOMB_FLAGGED,
      CellType.BOMB_HIDDEN,
      CellType.BOMB_REVEALED,
      CellType.RED_BOMB,
    ].includes(this.type);
  }

  isFlagged(): boolean {
    return [
      CellType.BLANK_FLAGGED,
      CellType.BOMB_FLAGGED,
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

  isRevealed(): boolean {
    return [
      CellType.BLANK_REVEALED,
      CellType.BOMB_REVEALED,
      CellType.RED_BOMB,
    ].includes(this.type);
  }

  isSafe(): boolean {
    return !this.hasBomb();
  }

  isTried(): boolean {
    return this.hasBeenTried;
  }

  adoptProps(otherCell: CellAbstract): void {
    this.setAdjBombCount(otherCell.getAdjBombCount());
    this.setCoor(...otherCell.getCoors() as [number, number]);
    this.setTried(otherCell.getTried());
  }

  reset(): void {
    this.coor.xCoor = null;
    this.coor.yCoor = null;
    this.adjBombCount = -1;
    this.hasBeenTried = false;
  }
}

export default CellAbstract;
