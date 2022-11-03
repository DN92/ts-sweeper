/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-len */

// @ts-nocheck

import CellStack from './CellStack';
import CellAbstract from '../game/cells/CellAbstractClass';
import BlankFlaggedCell from '../game/cells/BlankFlaggedCellClass';
import BlankHiddenCell from '../game/cells/BlankHiddenCellClass';
import BlankRevealedCell from '../game/cells/BlankRevealedCellClass';
import BombFlaggedCell from '../game/cells/BombFlaggedCellClass';
import BombHiddenCell from '../game/cells/BombHiddenCellClass';
import BombRevealedCell from '../game/cells/BombRevealedCellClass';
import RedBombCell from '../game/cells/RedBombCellClass';
import DefaultCell from '../game/cells/DefaultCellClass';

const argOptions = [
  [BlankFlaggedCell, 3],
  [BlankHiddenCell, 3],
  [BlankRevealedCell, 3],
  [BombFlaggedCell, 3],
  [BombHiddenCell, 3],
  [BombRevealedCell, 3],
  [RedBombCell, 3],
  [DefaultCell, 3],
];

const coorArr = [
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 6],
];

describe('validate provided argOptions', () => {
  test('all options should have unique constructors', () => {
    expect(new Set(argOptions.map((opt) => opt[0])).size === argOptions.length).toBe(true);
  });
});

describe('Cell Stack constructor creates correct sizes for stack array ', () => {
  argOptions.forEach((option) => {
    const cellStack = new CellStack(...option);
    test('cellStack length should be 3 with provided options', () => {
      expect(cellStack.stack.length).toBe(3);
    });
    test('each options should return a stack of its own celltypes', () => {
      expect(cellStack.stack.every((cell) => cell instanceof option[0])).toBe(true);
    });
    const cellStack2 = new CellStack(DefaultCell, -3);
    test('stack size should never be negative', () => {
      expect(cellStack2.stack.length > -1).toBe(true);
    });
  });
});

describe('takeCell function works correctly', () => {
  argOptions.forEach((option) => {
    const cellStack = new CellStack(...option);
    coorArr.forEach((coor) => {
      test('take cell returns a instance of cell', () => {
        expect(cellStack.takeCell(coor)).toBeInstanceOf(option[0]);
      });
      test('take cell returns proper coordinates', () => {
        expect(cellStack.takeCell(coor).getCoors())
          .toStrictEqual(coor);
      });
    });
  });

  argOptions.forEach((option) => {
    const cellStack = new CellStack(...option);
    coorArr.forEach((coor) => {
      const initialLength = cellStack.stack.length;
      const someCell = cellStack.takeCell(coor);
      const endLength = cellStack.stack.length;
      test.runIf(initialLength > 0)('takeCell takes a cell from the cell stack (class) while the stack is non-empty', () => {
        expect(endLength + 1).toBe(initialLength);
      });
      test.runIf(initialLength < 1)('takeCell creates a new cell only when cell stack is empty', () => {
        expect(initialLength).toBe(0);
        expect(endLength).toBe(0);
      });
      test('in both cases, SomeCell is a CellAbstract', () => {
        expect(someCell).toBeInstanceOf(CellAbstract);
      });
    });
  });
});

describe('return cell class function works propertly', () => {
  argOptions.forEach(([Construct, count]) => {
    const someCell: CellAbstract = new Construct(1, 1);
    someCell.setTried(true);
    const cellStack = new CellStack(Construct, count);
    const { stack } = cellStack;
    test('return cell adds to the length of cellStack, and the cell added is reset', () => {
      const initialLength = cellStack.stack.length;
      cellStack.returnCell(someCell);
      const finalLength = cellStack.stack.length;
      expect(someCell).toBeInstanceOf(CellAbstract);
      expect(finalLength).toBe(initialLength + 1);
      expect(stack[stack.length - 1]).toEqual(someCell);
      expect(someCell.adjBombCount).toBe(-1);
      expect(someCell.coor).toStrictEqual({ xCoor: null, yCoor: null });
      expect(someCell.hasBeenTried).toBe(false);
    });
    test('');
  });
});

describe('fill store class function works properly', () => {
  argOptions.forEach(([Construct, count]) => {
    test('stack has been properly emptied by test', () => {
      const cellStack = new CellStack(Construct, count);
      cellStack.stack = [];
      expect(cellStack.stack.length).toBe(0);
    });
    test('fill store fills the store to the correct size', () => {
      const cellStack = new CellStack(Construct, count);
      cellStack.stack = [];
      cellStack.fillStack();
      expect(cellStack.stack.length).toBe(count);
      cellStack.stack = [];
      const someCell = new Construct(1, 1);
      cellStack.stack.push(someCell);
      cellStack.fillStack();
      expect(cellStack.stack.length).toBe(cellStack.stack.length > count ?
        cellStack.stack.length
        : count);
    });
  });
});

describe('emptyStack class function works properly', () => {
  argOptions.forEach(([Construct, count]) => {
    test('empty stack clears the stack', () => {
      const cellStack = new CellStack(Construct, count);
      cellStack.stack.push(new Construct(null, null));
      expect(cellStack.stack.length).toBe(count + 1);
      cellStack.emptyStack();
      expect(cellStack.stack.length).toBe(0);
    });
  });
});

