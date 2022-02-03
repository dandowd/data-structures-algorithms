import { cutRod } from '../cutRod';

describe('cutRod', () => {
  it('should return optimal price', () => {
    const prices = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    const opt = cutRod(prices, 5);

    expect(opt).toEqual(13);
  });
});
