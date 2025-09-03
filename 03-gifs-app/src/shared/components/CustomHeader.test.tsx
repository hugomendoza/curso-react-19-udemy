import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);
    // screen.debug();
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByText(title)).toBeDefined();
  });

  test('should render the description when provided', () => {
    const description = 'Test Description';

    render(
      <CustomHeader
        title="Mi titulo"
        description={description}
      />
    );
    // screen.debug();
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should render the description when not provided - Hugo', () => {
    const { container } = render(<CustomHeader title="Mi titulo" />);

    const description = container.querySelector('p');
    expect(description).toBeNull();
  });

  test('should render the description when not provided - Fernando Herrera', () => {
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector('.content-center');
    const h1 = divElement?.querySelector('h1');

    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector('p');
    expect(p).toBeNull();
  });
});
