function topKFrequent(nums: number[], k: number): number[] {
  let result: number[] = [];
  let checker = new Map<number, number>();
  for(let i=0; i <nums.length; i++ ) {
    checker.set(nums[i], (checker.get(nums[i]) ?? 0) + 1)
  }

  if(checker.size === k) return [...checker.keys()];

  const checker2 = new Map([...checker.entries()].
      sort((a,b) => b[1] - a[1]))

  for( const key of checker2.keys() ) {
    if(k === 0) break;
    result.push(key);
    --k;
  }
  return result;

};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))
