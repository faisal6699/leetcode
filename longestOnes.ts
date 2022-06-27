function longestOnes(nums: number[], k: number): number {
  let res: number = 0,max: number = 0, map: {[key: number]: number} = {}, start = 0;

  for(let end = 0; end < nums.length; end++) {
    map[nums[end]] = nums[end] === 1 ? (map[nums[end]] || 0) + 1 : (map[nums[end]] || 0);
    max = Math.max(max, map[nums[end]]);
    if(end - start + 1 - max > k) map[nums[start++]]--;
    res = Math.max(res, end - start + 1)
  }

  return res;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

