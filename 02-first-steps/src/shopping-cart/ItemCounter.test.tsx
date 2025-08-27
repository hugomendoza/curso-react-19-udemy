import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const name = 'Test item';
    render(<ItemCounter name={name} />);
    // screen.debug();
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test('should render counter with default value', () => {
    const name = 'Test item';
    const quantity = 10;

    render(
      <ItemCounter
        name={name}
        quantity={quantity}
      />
    );
    // screen.debug();

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    render(
      <ItemCounter
        name={'Test item'}
        quantity={1}
      />
    );

    const [buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);

    expect(screen.getByText('2')).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    render(
      <ItemCounter
        name={'Test item'}
        quantity={5}
      />
    );

    const [, buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText('4')).toBeDefined();
  });

  test('should decrease count when -1 button is pressed and quantity is 1', () => {
    render(
      <ItemCounter
        name={'Test item'}
        quantity={1}
      />
    );

    const [, buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText('1')).toBeDefined();
  });

  test('should change to red when count is 1', () => {
    const quantity = 1;
    const name = 'Test item';

    render(
      <ItemCounter
        name={name}
        quantity={quantity}
      />
    );

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('red');
  });

  test('should change to black when count is greater than 1', () => {
    const quantity = 2;
    const name = 'Test item';

    render(
      <ItemCounter
        name={name}
        quantity={quantity}
      />
    );

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('black');
  });
});
