const remSize = 2;
const remAsString = `${remSize}rem`;

class CellCSSandImage {
  css: React.CSSProperties;
  image?: string;
  constructor(bColor: string, border: string, image?: string) {
    this.css = {
      height: remAsString,
      width : remAsString,
      overflow : 'none',
      boxSizing : 'border-box',
      background : bColor,
      border : border,
    }
    this.image = image || "";
  }
}

export default CellCSSandImage
