function isHappy(n: number): boolean {
  if(n === 1) return true;
  let happy: boolean = false,  num: number = n;
  const alreadyVisited: number[] = [];
  while (num !== 1) {
    num = getSquaredSum(num)
    if(alreadyVisited[num]) break;
    if(num === 1) happy = true;
    alreadyVisited[num] = 1;
  }
  return happy;
};

function getSquaredSum(num: number): number {
  let result: number = 0;
  while (num > 0) {
    let curNumber: number = num % 10;
    result += (curNumber * curNumber);
    num = Math.trunc(num/10);
  }

  console.log(result , "result");
  return result;
}

console.log(isHappy(19));
