const remSize = 2;
const remAsString = `${remSize}rem`;
class CellCSSandImage {
    constructor(bColor, border, image) {
        this.css = {
            height: remAsString,
            width: remAsString,
            overflow: 'none',
            boxSizing: 'border-box',
            background: bColor,
            border: border,
        };
        this.image = image || "";
    }
}
export default CellCSSandImage;
//# sourceMappingURL=CellCSSandImage.js.map