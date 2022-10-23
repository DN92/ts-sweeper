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

export enum cellType {
  UNSET = 'unset',
  BLANK_HIDDEN = 'blank-hidden',
  BLANK_FLAGGED = 'blank-flagged',
  BLANK_REVEALED = 'blank-revealed',
  BOMB_HIDDEN = 'bomb-hidden',
  BOMB_FLAGGED = 'bomb-flagged',
  BOMB_REVEALED = 'bomb-revealed',
  RED_BOMB = 'red-bomb'
}

export enum gameStatus {
  READY = 'ready',
  RUNNING = 'running',
  WON = 'won',
  LOST = 'lost'
}

export interface gameClock {
  time: string,
  running: boolean,
}
