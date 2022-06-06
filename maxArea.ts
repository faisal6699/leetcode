function maxArea(height: number[]): number {
  let i = 0, j = height.length -1, result = 0;
  while ( i < j) {
    if(height[i] <= height[j]) {
      result = Math.max(result, (height[i] * (j - i)))
      i++;
    }else {
      result = Math.max(result, (height[j] * (j - i)))
      j--;
    }
  }

  return result;
};

console.log(maxArea([5,10,12,2,13]));
