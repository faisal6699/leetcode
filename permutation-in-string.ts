// function checkInclusion(s1: string, s2: string): boolean {
//   let s1Arr: number[] = [];
//   for(let i = 0; i < s1.length; i++) {
//     s1Arr[s1.charCodeAt(i) - 97] = (s1Arr[s1.charCodeAt(i) - 97] || 0) + 1;
//   }
//   for(let j = 0; j <= s2.length - s1.length; j++) {
//     let s2Arr: number[] = [];
//     for(let k =0; k < s1.length; k++) {
//       s2Arr[s2.charCodeAt(j + k) - 97] = (s2Arr[s2.charCodeAt(j+k) - 97] || 0) + 1;
//     }
//     if(matchArr(s1Arr, s2Arr)) return true
//   }
//   return false
// }

function checkInclusion(s1: string, s2: string): boolean {
  let s1Arr: number[] = [];
  let s2Arr: number[] = [];
  for(let k = 0; k < 26; k++) {
    s1Arr[k] = 0;
    s2Arr[k] = 0;
  }
  for(let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - 97] = (s1Arr[s1.charCodeAt(i) - 97]) + 1;
    s2Arr[s2.charCodeAt(i) - 97] = (s2Arr[s2.charCodeAt(i) - 97]) + 1
  }
  for(let j = 0; j < s2.length - s1.length; j++) {
    if(matchArr(s1Arr, s2Arr)) return true
    s2Arr[s2.charCodeAt(j + s1.length) - 97] =
        (s2Arr[s2.charCodeAt(j + s1.length) - 97]) + 1;
    s2Arr[s2.charCodeAt(j) - 97] =
        (s2Arr[s2.charCodeAt(j) - 97]) - 1;

  }
  return matchArr(s1Arr, s2Arr)
}

function matchArr(s1Arr: number[], s2Arr: number[]): boolean {
  for (let i =0; i< 26; i++) {
    if(s1Arr[i] !== s2Arr[i]) return false;
  }
  return true;
}

console.log(checkInclusion("ab", "eibaooo"));
