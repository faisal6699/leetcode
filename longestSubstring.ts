function lengthOfLongestSubstring(s: string): number {
  let res: number = 0, i: number = 0, len: number = s.length;
  let lastIndex = new Array<number>(256);
  lastIndex.fill(-1);

  for (let j = 0; j < len; j++) {
    console.log(s.charCodeAt(j));
    i = Math.max(i, lastIndex[s.charCodeAt(j)] + 1);
    res = Math.max(res, j - i + 1);
    lastIndex[s.charCodeAt(j)] = j;
  }

  return res;
};

const ls = lengthOfLongestSubstring('abcabcbb');
console.log(ls);

