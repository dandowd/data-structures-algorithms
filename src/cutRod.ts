// Finds the optimal price of a length of rod
export function cutRod(prices: number[], length: number): number {
  if (length === 0) {
    return 0;
  }

  let max = -Infinity;
  for (let i = 0; i < length; i++) {
    max = Math.max(max, prices[i] + cutRod(prices, length - i - 1));
  }

  return max;
}
