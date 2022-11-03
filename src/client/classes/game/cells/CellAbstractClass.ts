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

  getCoorsAsNumbers(): [number, number] | never {
    // the point of this function is strictly to type switch and remove the nulls
    // we do this here once instead of constantly needing to 'as' everywhere else
    if (!this.hasCoordinates()) throw Error('getCoorsAsNumber received null or undefined value');
    const [x, y] = this.getCoors() as [number, number];
    [x, y].forEach((val) => {
      if (val < 0) throw Error('input numbers cannot be negative');
    });
    return [this.coor.xCoor as number, this.coor.yCoor as number];
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

  hasCoordinates(): boolean {
    const { xCoor, yCoor } = this.coor;
    if ([xCoor, yCoor].includes(null)) return false;
    // return (!!xCoor || xCoor === 0) && (!!yCoor || yCoor === 0);
    return xCoor as number > -1 && yCoor as number > -1;
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
      // CellType.UNSET,
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
