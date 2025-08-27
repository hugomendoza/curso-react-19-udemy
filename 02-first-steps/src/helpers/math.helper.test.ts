import { expect, test } from 'vitest';
import { add } from './math.helper';

test('sholud add two positive numbers', () => {
  // ! 1.Arrange
  const a = 1;
  const b = 2;

  // ! 2.Act
  const result = add(a, b);

  // ! 3.Assert
  expect(result).toBe(a + b);

  // console.log({ result });
});
