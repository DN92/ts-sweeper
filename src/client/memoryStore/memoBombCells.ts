import BombHidden from "client/classes/BombHiddenCell";
import CellAbstract from "client/classes/CellAbstract";


// interface funcObj {
//   [key: string]: Function
// }

interface GameOptions {
  bombs: number,
}

type CellConstructor = new(x: number | null, y: number | null ) => CellAbstract

class BombStore{
  gameOptions: GameOptions
  bombStore: CellAbstract[]
  constructor(gameOptions: GameOptions, cellConstructor: CellConstructor) {
    this.gameOptions = gameOptions
    this.bombStore = new Array(gameOptions.bombs).fill(new cellConstructor(null, null))
  }

  takeHiddenBomb(x: number, y:number): BombHidden {
    let bomb: BombHidden | undefined = this.bombStore.pop()
    if (bomb) bomb.setCoor(x, y)
    return bomb ? bomb : new BombHidden(x, y)
  }

  returnHiddenBomb(bombHidden: BombHidden): void {
    this.bombStore.push(bombHidden)
  }

  fillHiddenStore(): void {
    while(this.bombStore.length < this.gameOptions.bombs) {
      this.bombStore.push(new BombHidden(null, null))
    }
  }

  emptyHiddenStore(): void {
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

export default BombStore
