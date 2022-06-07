function groupAnagrams(strs: string[]): string[][] {
const gAnagrams = new Map<string, string[]>();

for(let i =0; i< strs.length; i++) {
  const sortedValue = strs[i].split('').sort().toString();
  if(!gAnagrams.has(sortedValue)) {
    gAnagrams.set(sortedValue, [strs[i]]);
  }else {
    gAnagrams.set(sortedValue, gAnagrams.get(sortedValue)!.concat(strs[i]))
  }
}
return [...gAnagrams.values()];
}


console.log(groupAnagrams(
    ["", "b"]));
