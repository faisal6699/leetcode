function maxSubArray(nums: number[]): number {
  let finalResult = nums[0], tempResult = nums[0];
  for(let i=1; i < nums.length; i++) {
   tempResult = Math.max(tempResult + nums[i], nums[i]);
   finalResult = Math.max(tempResult, finalResult);
  }
  return finalResult;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
