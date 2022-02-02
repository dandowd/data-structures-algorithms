import { findMaxCrossingSubarray } from '../maxSubarray';

describe('maxSubarray', () => {
  describe('findMaxCrossingSubarray', () => {
    const items = [13, -3, -25, 20, -3, -16, -23, 18, 20];

    it('should return', () => {
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
});
