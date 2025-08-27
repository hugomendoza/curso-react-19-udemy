import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positive numbers', () => {
    // ! 1.Arrange
    const a = 1;
    const b = 2;

    // ! 2.Act
    const result = add(a, b);

    // ! 3.Assert
    expect(result).toBe(a + b);

    // console.log({ result });
  });
});

describe('subtract', () => {
  test('should subract two positive numbers', () => {
    const a = 1;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test('should return a negative number', () => {
    const a = -1;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two positive numbers', () => {
    const a = 1;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test('should return zero', () => {
    const a = 8;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(0);
  });
});

describe('divide', () => {
  test('should divide two positive numbers', () => {
    const a = 1;
    const b = 2;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
