import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid='ItemCounter'></div>;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid='ItemCounter'
//       name={props.name}
//       quantity={props.quantity}
//     ></div>
//   ),
// }));

describe('FirstStepsApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);
    const itemCounters = screen.getAllByTestId('ItemCounter');
    // console.log(itemCounters.length);
    // screen.debug();

    expect(itemCounters.length).toBe(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch 2',
      quantity: 10,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pro Controller',
      quantity: 8,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Super Smash',
      quantity: 5,
    });
  });
});
