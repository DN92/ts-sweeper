// eslint-disable import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import getSum from './test';


describe('getsum', () => {
  it('when no arguments are provided, returns zero', () => {
    expect(getSum()).toBe(0);
  });

  it('return input number with one number argument provided', () => {
    expect(getSum(3)).toBe(3);
    expect(getSum(4)).toBe(4);
    expect(getSum(5)).toBe(5);
  });

  it('returns correct sum for multiple numbers', () => {
    expect(getSum(1, 2, 3, 4)).toBe(10);
  });
});
