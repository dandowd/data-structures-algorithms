export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }
}

export function merge(a: number[], low: number, mid: number, high: number) {
  const leftCount = mid - low;
  const rightCount = high - mid;
  const left = [];
  const right = [];

  for (let i = 0; i <= leftCount; i++) {
    left[i] = a[low + i];
  }

  for (let j = 1; j <= rightCount; j++) {
    right[j - 1] = a[mid + j];
  }

  let leftIndex = 0;
  let rightIndex = 0;

  for (let k = low; k <= high; k++) {
    if (left[leftIndex] <= right[rightIndex] || !right[rightIndex]) {
      a[k] = left[leftIndex];
      leftIndex++;
    } else {
      a[k] = right[rightIndex];
      rightIndex++;
    }
  }
}

export function mergeSort(a: number[], low: number, high: number) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(a, low, mid);
    mergeSort(a, mid + 1, high);
    merge(a, low, mid, high);
  }
}
