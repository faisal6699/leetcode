type ResultType = {
  [key: number]: number
}

function carFleet(target: number, position: number[], speed: number[]): number {
  let resultArr: ResultType = {};
  let result: number = 0;
  for(let pos = 0; pos < position.length; pos++) {
    let posSpeed = position[pos] + speed[pos];
    if(!resultArr[posSpeed]) {
      resultArr[posSpeed] = speed[pos];
      result++;
      continue;
    }
    resultArr[posSpeed] = Math.min(resultArr[posSpeed], speed[pos]);
  }

  console.log(resultArr);

  let newResult: ResultType = {...resultArr};
  for(const key in resultArr) {
    let newSpeed: number = newResult[key] + Number(key);
    console.log(newResult, newSpeed, "newResult", key);
    while (newSpeed <= target) {
      if(newResult[newSpeed] && newResult[newSpeed] > newResult[key]) {
        result--;
        newResult[newSpeed] = Math.min(newResult[newSpeed], newResult[key]);
        break;
      }
        newResult[newSpeed] = newResult[key];
        newSpeed += newResult[key];
    }
  }

  return result;
};

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
