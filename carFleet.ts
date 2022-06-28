

function carFleet(target: number, position: number[], speed: number[]): number {
  let result: number = position.length - 1;
  for( let i = position.length - 1; i > 0; i--) {
    // console.log(position[i], speed[i]);
    let t1 = (target - position[i]) / speed[i];
    let t2 = (target - position[i - 1]) / speed[i - 1]
    console.log(t1, t2);
    if(t2 > t1) {
      position.splice(i - 1, 1);
      speed.splice(i - 1, 1);
      result--;
    }
  }


  return result;
};

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
// console.log(carFleet(10, [4,6], [3,2]));
