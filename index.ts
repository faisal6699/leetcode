// function threeSum(nums: number[]): number[][] {
//   let result: number[][] = [];
//   nums = nums.sort();
//   if(nums.length < 2){
//     return [nums];
//   }
//   for(let i =0; i < nums.length - 2;i++){
//     let subResult: number[][] = setResult(i, [...nums]);
//         if(subResult?.length){
//           // console.log(result.has(subResult))
//             subResult.map((item2:any) => {
//               console.log(result.length, 'result');
//               if(!result) {
//                 result.push(...subResult)
//               }
//
//             })
//
//
//         }
//   }
//
//   return [...result];
// }
//

//
//
//
// function setResult(i: number, nums: number[]): number[][] {
//   let j = i + 1, k = nums.length - 1;
//   let tempResult: number[][] = [];
//   while( j < k) {
//     if ( nums[i] + nums[j]+ nums[k] === 0) {
//       tempResult.push([nums[i], nums[j], nums[k]]);
//       j++; k--;
//     }else if(nums[i] + nums[j]+ nums[k] > 0){
//       k--
//     }else {
//       j++;
//     }
//   }
//
//   return tempResult;
// }
//
//
//

function threeSum(nums: number[]): number[][] {
  let result = new Set<any>();
  nums = nums.sort();
  if(nums.length < 2){
    return [nums];
  }
  for(let i =0; i < nums.length - 2;i++) {
    let subResult: number[][] = setResult(i, [...nums]);
    if (subResult) {
      subResult.map((item2: number[]) => {
         if(!result.size) result.add(item2);
          else {
            result.forEach((item: number[]) => {
              if(!arraysEqual(item, item2)){
                console.log(item, item2, "check");
                result.add(item2);
              }
            })
         }

      })
    }

  }
  return [...result];
}

function arraysEqual(a: number[], b: number[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function setResult(i: number, nums: number[]): number[][] {
  let j = i + 1, k = nums.length - 1;
  let tempResult: number[][] = [];
  while( j < k) {
    if ( nums[i] + nums[j]+ nums[k] === 0) {
      tempResult.push([nums[i], nums[j], nums[k]]);
      j++; k--;
    }else if(nums[i] + nums[j]+ nums[k] > 0){
      k--
    }else {
      j++;
    }
  }

  return tempResult;
}

console.log(threeSum([0,0,0,0]));

console.log(threeSum([1,1,-1,-1]));
//
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-1,0,1,2,-1,-4, 5, 8]));

console.log(threeSum([-1,0,1,2,-1,-4]));
