import { insertionSort } from '../sorting';

describe('sorting', () => {
  describe('insertionSort', () => {
    it('should arrange in ascending order', () => {
      const items = [5, 4, 3, 2, 1];

      insertionSort(items);
      expect(items).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
