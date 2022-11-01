/* eslint-disable no-undef */

import CellAbstract from './CellAbstract';
import CellType from './cellTypeEnum';

function createCellNullNull(): CellAbstract {
  return new CellAbstract(null, null);
}


describe('CellAbstract', () => {
  test('instance correctly initiated (TESTS PRELOAD)', () => {
    const cell = new CellAbstract(null, null);
    expect(cell).toBeInstanceOf(CellAbstract);
  });
  test('Cell initiated to null coordinates', () => {
    const cell = createCellNullNull();
    expect(cell.coor).toStrictEqual({ xCoor: null, yCoor: null });
  });
  test('get adj bomb count return -1 ', () => {
    const cell = createCellNullNull();
    expect(cell.getAdjBombCount()).toBe(-1);
    expect(cell.adjBombCount).toBe(-1);
  });

  test('bombs set to 2', () => {
    const cell = createCellNullNull();
    cell.setAdjBombCount(2);
    expect(cell.getAdjBombCount()).toBe(2);
    expect(cell.adjBombCount).toBe(2);
  });

  test('bombs set to 3', () => {
    const cell = createCellNullNull();
    cell.setAdjBombCount(3);
    expect(cell.getAdjBombCount()).toBe(3);
    expect(cell.adjBombCount).toBe(3);
  });

  test('getTried and setTried method returns false before alter, then true after, then false', () => {
    const cell = createCellNullNull();
    expect(cell.getTried()).toBe(false);
    cell.setTried(true);
    expect(cell.getTried()).toBe(true);
    cell.setTried(false);
    expect(cell.getTried()).toBe(false);
  });

  test('getType method', () => {
    const cell = createCellNullNull();
    expect(cell.getType()).toBe(CellType.UNSET);
  });

  test('reset method', () => {
    const cell = createCellNullNull();
    cell.setCoor(2, 5);
    expect(cell.getCoors()).toStrictEqual([2, 5]);
    cell.setAdjBombCount(4);
    expect(cell.getAdjBombCount()).toBe(4);
    cell.setTried(true);
    expect(cell.hasBeenTried).toBe(true);
    cell.reset();
    expect(cell.getCoors()).toStrictEqual([null, null]);
    expect(cell.getAdjBombCount()).toBe(-1);
    expect(cell.getTried()).toBe(false);
  });

  test('adopt props should properly adopt props form another cell', () => {
    const cell = createCellNullNull();
    const otherCell = new CellAbstract(2, 5);
    otherCell.setAdjBombCount(3);
    otherCell.setTried(true);
    //  pretest
    expect(otherCell.getAdjBombCount()).toBe(3);
    expect(otherCell.getTried()).toBe(true);
    expect(otherCell.getCoors()).toStrictEqual([2, 5]);

    cell.adoptProps(otherCell);
    expect(cell.getAdjBombCount()).toBe(3);
    expect(cell.getTried()).toBe(true);
    expect(cell.getCoors()).toStrictEqual([2, 5]);
  });
});
