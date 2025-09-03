import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('giphyApi', () => {
  test('should be configured correctly', () => {
    const params = giphyApi.defaults.params;
    // console.log(giphyApi.defaults);
    // console.log(params);

    // * toBe => Evaluar primitivos
    // * toStrictEqual => Evaluar objetos

    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
    expect(params.lang).toBe('es');
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(params).toStrictEqual({
      lang: 'es',
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
