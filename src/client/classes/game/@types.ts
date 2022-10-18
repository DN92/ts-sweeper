export interface gameOption {
  size: sizes,
  bombs: number,
  sizeOptions: sizeOptions
}

interface sizes {
  rows: number,
  columns: number
}

export interface presets {
  small: gameOption,
  medium: gameOption,
  large: gameOption,
  default: gameOption,
}

export interface sizeOptions {
  blankFlagged: number,
  blankHidden: number,
  blankRevealed: number,
  bombFlagged: number,
  bombHidden: number,
  bombRevealed: number,
  redBombs: number,
  defaultCells: number,
}
