/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-len */

// @ts-nocheck

import { TestFunction, TestOptions } from 'vitest';
import GameBoard from './GameBoard';
import CellType from './cells/cellTypeEnum';
import CellAbstract from './cells/CellAbstract';

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

function createSmallGameBoard() {
  return new GameBoard(smallGamePreset);
}

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

  describe('replaceCell function', () => {
    const gameBoard = createSmallGameBoard();
    const { board } = gameBoard;
    test('each element of board should be a Cell', () => {
      board.flat().every((cell) => cell instanceof CellAbstract);
    });
  });
});
