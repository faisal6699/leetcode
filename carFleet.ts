// type SortedType = {
//   [key: number]: number
// }
// function carFleet(target: number, position: number[], speed: number[]): number {
//   const sortedPosition: SortedType = {}
//   for(let i = 0; i< position.length; i++) {
//     sortedPosition[position[i]] = speed[i]
//   }
//   const stack: number[] = [];
//   let sPosition: number = 0;
//   const p = Object.keys(sortedPosition);
//   for( let i = p.length - 1; i >= 0; i--) {
//     let currentPosition = (target - Number(p[i])) / sortedPosition[Number(p[i])];
//     if(!stack[sPosition]) stack.push(currentPosition);
//     else {
//       if(stack[sPosition] < currentPosition) {
//         sPosition++;
//         stack.push(currentPosition);
//       }
//     }
//   }
//   return stack.length;
// };



