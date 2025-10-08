import type { PropsWithChildren } from 'react';
import { describe, expect, test, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useHeroSummary } from './useHeroSummary';
import { getSummaryAction } from '../actions/get-summary.action';
import type { SummaryInformationResponse } from '../types/summary-information.response';

vi.mock('../actions/get-summary.action', () => ({
  getSummaryAction: vi.fn(),
}));

const mockGetSummaryAction = vi.mocked(getSummaryAction);

const tankStackCustomProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useHeroSummary', () => {
  test('should return the initial state (isLoading)', () => {
    const { result } = renderHook(() => useHeroSummary(), {
      wrapper: tankStackCustomProvider(),
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
  });

  test('should return success state with data when API call succeeds', async () => {
    const mockSummaryData = {
      totalHeroes: 10,
      strongestHero: {
        id: '1',
        name: 'Superman',
      },
      smartestHero: {
        id: '2',
        name: 'Batman',
      },
      heroCount: 18,
      villainCount: 7,
    } as SummaryInformationResponse;

    mockGetSummaryAction.mockResolvedValue(mockSummaryData);

    const { result } = renderHook(() => useHeroSummary(), {
      wrapper: tankStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.isError).toBe(false);
    expect(mockGetSummaryAction).toHaveBeenCalled();
  });

  test('should return error state when API calls fails', async () => {
    const mockError = new Error('Failed to fetch summary');
    mockGetSummaryAction.mockRejectedValue(mockError);

    const { result } = renderHook(() => useHeroSummary(), {
      wrapper: tankStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.isLoading).toBe(false);
    expect(mockGetSummaryAction).toHaveBeenCalled();
    expect(result.current.error?.message).toBe('Failed to fetch summary');
  });
});
