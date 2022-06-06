function productExceptSelf(nums: number[]): number[] {
  let result: number[] = [];
  let current_result = 1
  for(let items of nums) {
    result.push(current_result);
    current_result*=items;
  }

  let new_result: number[] = [];
  current_result = 1;
  for(let i = nums.length -1 ; i >=0; i--) {
    new_result[i] = current_result;
    current_result *= nums[i];
    new_result[i] *= result[i];
  }
  return new_result;
};

console.log(productExceptSelf(
    [1,2,3]));
