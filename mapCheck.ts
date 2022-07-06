type SortedType = {
  [key: number]: number
}
function map(arr: number[]): boolean {
  const mapped: SortedType = {};
  for(let i =0; i< arr.length; i++) {
    mapped[arr[i]] = i
  }
  console.log(mapped);
  return false
}


console.log(map([3,1]));
