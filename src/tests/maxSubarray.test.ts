import { findMaxCrossingSubarray, findMaxSubarray } from '../maxSubarray';

describe('maxSubarray', () => {
  describe('findMaxCrossingSubarray', () => {
    it('should return', () => {
      const items = [13, -3, -25, 20, -3, -16, -23, 18, 20];
      const [maxLeft, maxRight, maxMid] = findMaxCrossingSubarray(
        items,
        0,
        Math.floor(items.length / 2),
        items.length - 1,
      );

      expect(maxLeft).toEqual(3);
      expect(maxRight).toEqual(8);
      expect(maxMid).toEqual(16);
    });
  });

  describe('findMaxSubarray', () => {
    it('should return the max subarray', () => {
      const items = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
      const values = findMaxSubarray(
        items,
        0,
        items.length,
      );

      expect(values).toEqual([7, 10, 43]);
    });
  });
});
