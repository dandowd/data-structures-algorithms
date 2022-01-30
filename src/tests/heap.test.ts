import { Heap } from '../heap';

describe('heap', () => {
  describe('maxHeapify', () => {
    it('should arrange nodes where the top node is the largest', () => {
      const heap = new Heap([1, 2, 3]);
      heap.maxHeapify(0);

      expect(heap.getArray()).toEqual([3, 2, 1]);
    });
  });

  describe('buildMaxHeap', () => {
    it('should sort array', () => {
      const items = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
      const heap = new Heap(items);
      heap.buildMaxHeap();

      expect(heap.getArray()).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
    });
  });

  describe('heapSort', () => {
    it('should sort array in ascending order', () => {
      const items = [4, 1, 3, 2, 9, 10, 8, 7];
      const heap = new Heap(items);
      heap.buildMaxHeap();
      heap.heapSort();

      expect(heap.getArray()).toEqual([1, 2, 3, 4, 7, 8, 9, 10]);
    });
  });
});
