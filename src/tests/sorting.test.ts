import { insertionSort, merge, mergeSort } from '../sorting';

describe('sorting', () => {
  describe('insertionSort', () => {
    it('should arrange in ascending order', () => {
      const items = [5, 4, 3, 2, 1];

      insertionSort(items);
      expect(items).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('merge', () => {
    it('should combine two sorted piles', () => {
      const items = [1, 3, 5, 2, 4, 6];
      merge(items, 0, 2, 5);

      expect(items).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should combine two numbers in ascending order', () => {
      const items = [4, 2];
      merge(items, 0, 0, 1);

      expect(items).toEqual([2, 4]);
    });
  });

  describe('mergeSort', () => {
    it('should sort and array in ascending order', () => {
      const items = [6, 5, 4, 3, 2, 1];
      mergeSort(items, 0, items.length - 1);

      expect(items).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
