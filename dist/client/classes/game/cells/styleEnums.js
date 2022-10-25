const remSize = 2;
const remAsString = `${remSize}rem`;
import CellCSSandImage from "./CellCSSandImage";
const borderOptions = {
    revealed: `${(remSize * 8) / 100}rem outset #A9A9A9`,
    hidden: `${(remSize * 20) / 100}rem outset #ECECEC`,
};
var Background;
(function (Background) {
    Background["hidden"] = "#c0c0c0";
    Background["revealed"] = "#ECECEC";
})(Background || (Background = {}));
var Image;
(function (Image) {
    Image["redFlag"] = "/images/redFlag.jpg";
    Image["mine"] = "/images/mine1.jpg";
    Image["redMine"] = "/images/lastMine.png";
})(Image || (Image = {}));
const cellStyles = {
    blankHidden: new CellCSSandImage(Background.hidden, borderOptions.hidden),
    blankFlagged: new CellCSSandImage(Background.hidden, borderOptions.hidden, Image.redFlag),
    blankRevealed: new CellCSSandImage(Background.revealed, borderOptions.revealed),
    bombHidden: new CellCSSandImage(Background.hidden, borderOptions.hidden),
    bombFlagged: new CellCSSandImage(Background.hidden, borderOptions.hidden, Image.redFlag),
    bombRevealed: new CellCSSandImage(Background.revealed, borderOptions.revealed, Image.mine),
    redBomb: new CellCSSandImage(Background.revealed, borderOptions.revealed, Image.redMine)
};
export default cellStyles;
//# sourceMappingURL=styleEnums.js.map