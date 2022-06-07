function longestConsecutive(nums: number[]): number {
  let sortedValue = [...new Set(nums)].sort((a, b) => a - b);
  let final_counter = 0;
  for(let  i= 0; i< sortedValue.length; i++) {
      let current_counter = 1, current_num = sortedValue[i];
      let j = i + 1;
      while (sortedValue[j] === current_num + 1) {
        ++current_counter;
        current_num = sortedValue[j];
        ++j;
      }
      i = --j;

      final_counter = Math.max(final_counter, current_counter);
    }
  return final_counter;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
