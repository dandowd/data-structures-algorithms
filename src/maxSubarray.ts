export function findMaxCrossingSubarray(a: number[], low: number, mid: number, high: number) {
  let leftSum = Number.MIN_SAFE_INTEGER;
  let rightSum = Number.MIN_SAFE_INTEGER;
  let maxLeft = 0;
  let maxRight = 0;
  let sum = 0;

  for (let i = mid; i >= low; i--) {
    sum += a[i];

    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  sum = 0;

  for (let j = mid + 1; j <= high; j++) {
    sum += a[j];

    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }

  return [maxLeft, maxRight, leftSum + rightSum];
}

export function findMaxSubarray(a: number[], low: number, high: number) {
  if (high === low) {
    return [low, high, a[low]];
  }

  const mid = Math.floor((low + high) / 2);
  const [leftLow, leftHigh, leftSum] = findMaxSubarray(a, low, mid);
  const [rightLow, rightHigh, rightSum] = findMaxSubarray(a, mid + 1, high);
  const [crossLow, crossHigh, crossSum] = findMaxCrossingSubarray(a, low, mid, high);

  if (leftSum >= rightSum && leftSum >= crossSum) {
    return [leftLow, leftHigh, leftSum];
  }

  if (rightSum > -leftSum && rightSum >= crossSum) {
    return [rightLow, rightHigh, rightSum];
  }

  return [crossLow, crossHigh, crossSum];
}
