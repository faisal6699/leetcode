function maxProfit(prices: number[]): number {
  let min: number = 1000000, max: number = 0;
  for (let i = 0; i < prices.length; i++) {
    min = getMin(min, prices[i]);
    max = getMax(max, prices[i] - min);
  }
  return max;
};

function getMin(min: number, cur: number): number {
  if( min > cur) return cur;
  return min;
}

function getMax(max: number, cur: number): number {
  if( max < cur) return cur;
  return max;
}

console.log(maxProfit([1,2]));
