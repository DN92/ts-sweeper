import { presets, sizeOptions } from './@types'

const defaultSizes: sizeOptions = {
  blankFlagged: 81,
  blankHidden: 81,
  blankRevealed: 81,
  bombFlagged: 81,
  bombHidden: 81,
  bombRevealed: 81,
  redBombs: 1,
  defaultCells: 81,
}

const gamePresets: presets = {
  small: {
    size: {
      rows: 9,
      columns: 9,
    },
    bombs: 10,
    sizeOptions: defaultSizes,
  },
  medium: {
    size: {
      rows: 16,
      columns: 16,
    },
    bombs: 40,
    sizeOptions: defaultSizes,
  },
  large: {
    size: {
      rows: 16,
      columns: 30,
    },
    bombs: 99,
    sizeOptions: defaultSizes,
  },

  default: {
    size: {
      rows: 16,
      columns: 30,
    },
    bombs: 99,
    sizeOptions: defaultSizes,
  },
};

export default gamePresets;
