export class Heap {
  constructor(items: number[] = []) {
    this.heap = items;
    this.heapSize = items.length;
  }

  private heap: number[] = [];

  private heapSize: number;

  public readonly length = this.heap.length;

  // Swaps elements i and j
  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  public getArray = () => this.heap;

  public getHeight(i: number = 0): number {
    const leftIndex = Heap.left(i);
    const left = this.heap[leftIndex];

    if (!left) {
      return i;
    }

    return this.getHeight(leftIndex);
  }

  public static parent(i: number): number {
    return Math.floor(i / 2);
  }

  public static left(i: number): number {
    return 2 * i + 1;
  }

  public static right(i: number): number {
    return 2 * i + 2;
  }

  public maxHeapify(i: number): void {
    const l = Heap.left(i);
    const r = Heap.right(i);

    let largest = i;

    if (l < this.heapSize && this.heap[l] > this.heap[i]) {
      largest = l;
    }

    if (r < this.heapSize && this.heap[r] > this.heap[largest]) {
      largest = r;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.maxHeapify(largest);
    }
  }

  public buildMaxHeap() {
    const start = Math.floor(this.heap.length / 2);
    this.heapSize = this.heap.length;

    for (let i = start; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  public heapSort() {
    for (let i = this.heap.length - 1; i > 0; i--) {
      this.swap(0, i);
      this.heapSize--;
      this.maxHeapify(0);
    }
  }
}
