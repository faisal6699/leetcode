function characterReplacement(s: string, k: number): number {
  let map: { [key: string]: number} = {}, res = 0, max = 0, start = 0;
  for(let end = 0; end < s.length ; end++) {
    map[s[end]] = (map[s[end]] || 0) + 1;
    max = Math.max(max, map[s[end]]);
    if(end - start + 1 - max > k) map[s[start++]]--;
    res = Math.max(res, end - start + 1);
  }
  return res;
}

console.log(characterReplacement("KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF", 4));
