// eslint-disable-next-line no-shadow
export enum HEAP_TYPE {
  MIN,
  MAX
}

export class Heap {
  constructor(items: number[], type: HEAP_TYPE = HEAP_TYPE.MAX) {
    this.heap = items;
    this.heapSize = items.length;
    this.heapType = type;
    this.heap.length = items.length;
  }

  private heap: number[];

  private heapType: HEAP_TYPE;

  private heapSize: number;

  public readonly length;

  // Swaps elements i and j
  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  public getArray = () => this.heap;

  // Since a heap is a complete tree the longest branch should always be the furthest left
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

  private isMax = (child: number, current: number) => this.heap[child] > this.heap[current];

  private isMin = (child: number, current: number) => this.heap[child] < this.heap[current];

  public heapify(i: number): void {
    const l = Heap.left(i);
    const r = Heap.right(i);
    const comparison = this.heapType === HEAP_TYPE.MAX ? this.isMax : this.isMin;

    let largest = i;

    if (l < this.heapSize && comparison(l, i)) {
      largest = l;
    }

    if (r < this.heapSize && comparison(r, largest)) {
      largest = r;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  public buildHeap() {
    const start = Math.floor(this.heap.length / 2);
    this.heapSize = this.heap.length;

    for (let i = start; i >= 0; i--) {
      this.heapify(i);
    }
  }

  public heapSort() {
    for (let i = this.heap.length - 1; i > 0; i--) {
      this.swap(0, i);
      this.heapSize--;
      this.heapify(0);
    }
  }
}
