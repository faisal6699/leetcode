function dailyTemperatures(temperatures: number[]): number[] {
  let highestValue: number = 0;
  let result: number[] = [];
  for(let i=0; i<temperatures.length;i++) {
      result.push(0)
  }

  for(let n = temperatures.length - 1; n>=0; n--) {
    if(temperatures[n] >= highestValue) {
      highestValue = temperatures[n];
      continue;
    }
    let days = 1;
    while (temperatures[n+days] <= temperatures[n]) {
      days += result[n+days];
    }
    result[n] = days;
  }
  return result;

};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
