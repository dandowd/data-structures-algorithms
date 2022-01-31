import { Heap, HEAP_TYPE } from '../heap';

describe('heap', () => {
  describe('heapify', () => {
    it('should arrange nodes where the top node is the largest', () => {
      const heap = new Heap([1, 2, 3]);
      heap.heapify(0);

      expect(heap.getArray()).toEqual([3, 2, 1]);
    });

    it('should arrang nodes where top node is the smallest', () => {
      const heap = new Heap([3, 1, 2], HEAP_TYPE.MIN);
      heap.heapify(0);

      expect(heap.getArray()).toEqual([1, 3, 2]);
    });
  });

  describe('buildHeap', () => {
    it('should build maxHeap', () => {
      const items = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
      const heap = new Heap(items);
      heap.buildHeap();

      expect(heap.getArray()).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
    });

    it('should build minHeap', () => {
      const items = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
      const heap = new Heap(items, HEAP_TYPE.MIN);
      heap.buildHeap();

      expect(heap.getArray()).toEqual([1, 2, 3, 4, 7, 9, 10, 14, 8, 16]);
    });
  });

  describe('heapSort', () => {
    it('should sort array in ascending order', () => {
      const items = [4, 1, 3, 2, 9, 10, 8, 7];
      const heap = new Heap(items);
      heap.buildHeap();
      heap.heapSort();

      expect(heap.getArray()).toEqual([1, 2, 3, 4, 7, 8, 9, 10]);
    });

    it('should sort min heap in descending order', () => {
      const items = [4, 1, 3, 2, 9, 10, 8, 7];
      const heap = new Heap(items, HEAP_TYPE.MIN);
      heap.buildHeap();
      heap.heapSort();

      expect(heap.getArray()).toEqual([10, 9, 8, 7, 4, 3, 2, 1]);
    });
  });
});
