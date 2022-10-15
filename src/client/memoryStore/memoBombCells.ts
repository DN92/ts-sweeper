import cellAbstract from "client/classes/BombHiddenCell";
import CellAbstract from "client/classes/CellAbstract";


// interface funcObj {
//   [key: string]: Function
// }

interface GameOptions {
  bombs: number,
}

type CellConstructor = new(x: number | null, y: number | null ) => CellAbstract

class CellStore{
  gameOptions: GameOptions
  bombStore: CellAbstract[]
  constructor(gameOptions: GameOptions, cellConstructor: CellConstructor) {
    this.gameOptions = gameOptions
    this.bombStore = new Array(gameOptions.bombs).fill(new cellConstructor(null, null))
  }

  takeCell(x: number, y:number): cellAbstract {
    const cell: cellAbstract | undefined = this.bombStore.pop()
    if (cell) cell.setCoor(x, y)
    return cell ? cell : new cellAbstract(x, y)
  }

  returnCell(cell: cellAbstract): void {
    this.bombStore.push(cell)
  }

  fillStore(): void {
    while(this.bombStore.length < this.gameOptions.bombs) {
      this.bombStore.push(new cellAbstract(null, null))
    }
  }

  emptyStore(): void {
    while(this.bombStore.length) {
      this.bombStore = []
    }
  }
}

// function HiddenBombStore(bombs: number): funcObj {

//   let bombHiddenStore: (BombHidden)[] = new Array(bombs).fill(new BombHidden(null, null))

//   function takeHiddenBomb(x: number, y:number): BombHidden {
//     let bomb: BombHidden | undefined = bombHiddenStore.pop()
//     if (bomb) bomb.setCoor(x, y)
//     return bomb ? bomb : new BombHidden(x, y)
//   }

//   function returnHiddenBomb(bombHidden: BombHidden): void {
//     bombHiddenStore.push(bombHidden)
//   }

//   function fillHiddenStore(): void {
//     while(bombHiddenStore.length < bombs) {
//       bombHiddenStore.push(new BombHidden(null, null))
//     }
//   }

//   function emptyHiddenStore(): void {
//     while(bombHiddenStore.length) {
//       bombHiddenStore = []
//     }
//   }

//   return { takeHiddenBomb, returnHiddenBomb, fillHiddenStore, emptyHiddenStore }
// }

export default CellStore
