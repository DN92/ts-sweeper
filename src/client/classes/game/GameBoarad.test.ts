/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-len */

// @ts-nocheck

import { TestFunction, TestOptions } from 'vitest';
import GameBoard from './GameBoard';
import CellType from './cells/cellTypeEnum';
import CellAbstract from './cells/CellAbstract';
import CellStack from '../stacksAndStores/CellStack';
import BlankFlaggedCell from './cells/BlankFlaggedCell';
import BlankHiddenCell from './cells/BlankHiddenCell';
import BlankRevealedCell from './cells/BlankRevealedCell';
import BombFlaggedCell from './cells/BombFlaggedCell';
import BombHiddenCell from './cells/BombHiddenCell';
import BombRevealedCell from './cells/BombRevealedCell';
import RedBombCell from './cells/RedBombCell';
import DefaultCell from './cells/DefaultCell';


type Test = (name: string, fn: TestFunction, timeout?: number | TestOptions) => void

const smallGamePreset = {
  size: {
    rows: 3,
    columns: 7,
  },
  bombs: 3,
  sizeOptions: {
    blankFlagged: 81,
    blankHidden: 81,
    blankRevealed: 81,
    bombFlagged: 81,
    bombHidden: 81,
    bombRevealed: 81,
    redBombs: 1,
    defaultCells: 81,
  },
};

const cellTypes = [
  CellType.UNSET,
  CellType.BLANK_HIDDEN,
  CellType.BLANK_FLAGGED,
  CellType.BLANK_REVEALED,
  CellType.BOMB_HIDDEN,
  CellType.BOMB_FLAGGED,
  CellType.BOMB_REVEALED,
  CellType.RED_BOMB,
];

function createSmallGameBoard() {
  const gameBoard = new GameBoard(smallGamePreset);
  console.log('running');
  return gameBoard;
}

describe('create small game board test settup function', () => {
  const { board } = createSmallGameBoard();
  test('board has correct dimensions', () => {
    expect(board.length).toBe(3);
    board.forEach((row) => {
      expect(row.length).toBe(7);
    });
  });
  test('board axises are correctly inverted when trying to access indexes directly', () => {
    expect(board[0][0]).toBeDefined();
    expect(board[7 - 1]).toBeUndefined();
    expect(board[3 - 1][7 - 1]).toBeDefined();
  });
});

describe('Gameboard', () => {
  describe('generate board function', () => {
    describe('generate the correct board size', () => {
      const { board } = createSmallGameBoard();
      test('should return a 2d array of 3 by 7', () => {
        expect(board.length).toBe(3);
      });
      test('row1', () => {
        expect(board[0].length).toBe(7);
      });
      test('row2', () => {
        expect(board[1].length).toBe(7);
      });
      test('row3', () => {
        expect(board[2].length).toBe(7);
      });
      test('row4', () => {
        expect(board[3]).toBeUndefined();
      });
    });
  });

  describe('generates the correct number of bombs and non-bombs', () => {
    async function runTest1(i) {
      return new Promise((resolve) => {
        resolve(
          test(`Run [${i}]:: bombs should equal 3`, () => {
            const gameBoard = createSmallGameBoard();
            expect(gameBoard.getBombCounter()).toBe(3);
          }),
        );
      });
    }
    async function runTest2(i) {
      return new Promise((resolve) => {
        resolve(
          test(`Run [${i}]:: non-bombs should equal 18`, () => {
            const gameBoard = createSmallGameBoard();
            expect(gameBoard.board.flat().length - gameBoard.getBombCounter())
              .toBe(18);
            expect(gameBoard.board.flat().every((cell) => [CellType.BLANK_HIDDEN, CellType.BOMB_HIDDEN].includes(cell.type)))
              .toBe(true);
          }),
        );
      });
    }

    const test1Runs = [];
    const test2Runs = [];
    for (let i = 0; i < 10; i++) {
      test1Runs.push([runTest1, i]);
      test2Runs.push([runTest2, i]);
    }
    Promise.all(test1Runs.map(([func, arg]) => {
      return func(arg);
    }));
    Promise.all(test2Runs.map(([func, arg]) => {
      return func(arg);
    }));
  });

  describe('getAdjCells function returns correct number of adj cells, testing 3x7 block', () => {
    const gameBoard = createSmallGameBoard();
    const { board } = gameBoard;
    const results: number[] = [];
    board.flat().forEach((cell) => {
      results.push(gameBoard.getAdjCells(cell).length);
    });
    test('results should have length 21', () => {
      expect(results.length).toBe(21);
    });
    test('result array should contain four 3s for corner cells', () => {
      expect(results.filter((num) => num === 3).length).toBe(4);
    });
    test('5 inner cells should have 8 adj cells', () => {
      expect(results.filter((num) => num === 8).length).toBe(5);
    });
    test('21 - 5 - 4 = 12 remaining perimeter cells should have 5 adj cells', () => {
      expect(results.filter((num) => num === 5).length).toBe(12);
    });
    test('no cell should have a adjCell length other than 3, 5, or 8', () => {
      expect(results.every((num) => [3, 5, 8].includes(num))).toBe(true);
    });
  });

  test('each element of board should be a Cell', () => {
    const gameBoard = createSmallGameBoard();
    const { board } = gameBoard;
    expect(board.flat().every((cell) => cell instanceof CellAbstract)).toBe(true);
  });

  describe('replaceCell function', () => {
    const gameBoard = createSmallGameBoard();
    const { board } = gameBoard;
    const indexX = 1;
    const indexY = 2;
    const testerArr1 = [
      [1, null],
      [null, 1],
      [null, null],
    ];
    const testerArr2 = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    test('if old cell does not have set coordinates, throws an error', () => {
      // testerArr1.forEach((tester) => {
      //   expect(() => gameBoard.replaceCell(new CellAbstract(...tester), new CellAbstract(...tester)))
      //     .toThrowError('could not complete');
      // });
    });
    // test('replace cell replaces chosen cell with correct type and index', () => {
    //   expect(cellTypes.length).toBeGreaterThan(0);
    //   cellTypes.forEach((type) => {
    //     gameBoard.replaceCell(board[indexY][indexX], type);
    //     expect(board[indexY][indexX].type).toBe(type);
    //     testerArr2.forEach(([xIdx, yIdx]) => {
    //       gameBoard.replaceCell(board[yIdx][xIdx], type);
    //       expect(board[xIdx][yIdx].coor).toEqual({ xCoor: xIdx, yCoor: yIdx });
    //     });
    //   });
    // });
  });
});
