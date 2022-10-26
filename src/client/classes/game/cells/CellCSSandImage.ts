import { CSSProperties } from 'react';

const remSize = 2;
const remAsString = `${remSize}rem`;

class CellCSSandImage {
  css: CSSProperties;
  image?: string;
  constructor(bColor: string, border: string, image?: string) {
    this.css = {
      height: remAsString,
      width: remAsString,
      overflow: 'none',
      boxSizing: 'border-box',
      background: bColor,
      border,
      objectFit: 'contain',
    };
    this.image = image || '';
  }
}

export default CellCSSandImage;
