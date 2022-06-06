function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    if(s === t) return true;
    const sMap = new Map<string, any>();
    const tMap = new Map<string, any>();

    for(let i =0; i< s.length; i++) {
        if(!sMap.get(s[i])) {
            sMap.set(s[i], 1);
        }else {
            let value = sMap.get(s[i]);
            sMap.set(s[i], value + 1);
        }

        if(!tMap.get(t[i])) {
            tMap.set(t[i], 1);
        }else {
            let value = tMap.get(t[i]);
            tMap.set(t[i], value + 1);
        }
    }

        for (const key of sMap.keys()) {
            if(tMap.get(key) !== sMap.get(key) || !tMap.get(key))
                return false;
        }
    return true;
};


console.log(isAnagram("abca", "cdea"));
