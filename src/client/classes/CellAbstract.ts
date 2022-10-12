import CellType from "./CellTypeEnum";

enum Style {
  base = 'base',
  highlighted = 'highlighted',
  revealed = 'revealed',
  busted = 'busted'
}

interface Coor {
  xCoor: number | null,
  yCoor: number | null,
}

abstract class CellAbstract {
  type: CellType;
  coor: Coor;
  hasBomb: boolean;
  adjBombs: number | null;
  isFlagged: boolean;
  isRevealed: boolean;
  style: Style;
  constructor(x: number, y: number) {
    this.coor = { xCoor: x, yCoor: y };
    this.type = CellType.UNSET
    this.hasBomb = false;
    this.adjBombs = null;
    this.isFlagged = false;
    this.isRevealed = false;
    this.style = Style.base;
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

  setStyle(newStyle: Style) {
    const possibleStyles = ['base', 'highlighted', 'revealed', 'bust'];
    if (possibleStyles.includes(newStyle.toLowerCase())) {
      this.style = newStyle;
      return true;
    }
    return false;
  }

  setDerivedStyle() {
    this.setStyle(this.isRevealed ? Style.revealed : Style.base);
  }
}

export default CellAbstract;
