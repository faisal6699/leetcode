function twoSum(numbers: number[], target: number): number[] {
  let i =0, j = numbers.length -1;

  while (numbers[i] + numbers[j] !== target) {
    numbers[i] + numbers[j] < target ?  i++ : j--;
  }

  return [i + 1 , j + 1]

};

console.log(twoSum([2,7,11,15], 9))
