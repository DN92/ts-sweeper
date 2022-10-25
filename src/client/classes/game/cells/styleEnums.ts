import CellCSSandImage from './CellCSSandImage';

const remSize = 2;
// const remAsString = `${remSize}rem`;

const borderOptions = {
  revealed: `${(remSize * 8) / 100}rem outset #A9A9A9`,
  hidden: `${(remSize * 20) / 100}rem outset #ECECEC`,
};

enum Background {
  hidden = '#c0c0c0',
  revealed = '#ECECEC',
}

enum Image {
  redFlag = '/images/redFlag.jpg',
  mine = '/images/mine1.jpg',
  redMine = '/images/lastMine.png'
}

enum ImageAlt {
  redFlag = 'red flag',
}

const cellStyles = {
  blankHidden: new CellCSSandImage(
    Background.hidden,
    borderOptions.hidden,
  ),
  blankFlagged: new CellCSSandImage(
    Background.hidden,
    borderOptions.hidden,
    Image.redFlag,
  ),
  blankRevealed: new CellCSSandImage(
    Background.revealed,
    borderOptions.revealed,
  ),
  bombHidden: new CellCSSandImage(
    Background.hidden,
    borderOptions.hidden,
  ),
  bombFlagged: new CellCSSandImage(
    Background.hidden,
    borderOptions.hidden,
    Image.redFlag,
  ),
  bombRevealed: new CellCSSandImage(
    Background.revealed,
    borderOptions.revealed,
    Image.mine,
  ),
  redBomb: new CellCSSandImage(
    Background.revealed,
    borderOptions.revealed,
    Image.redMine,
  ),
};

export default cellStyles;
