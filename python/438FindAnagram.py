# create hashmap, and check hashmap is same, then index is part of solution
class Solution:
    def findAnagrams(self, s: str, p: str) -> list[int]:
        if len(p) > len(s): return []
        pm,sm={},{}
        for i in range(len(p)):
            pm[p[i]]=1+pm.get(p[i],0)
            sm[s[i]]=1+sm.get(s[i],0)
        res = [0] if pm == sm else []
        l = 0
        for i in range(len(p),len(s)):
            sm[s[i]] = 1 + sm.get(s[i],0)
            sm[s[l]]-=1

            if sm[s[l]] == 0:
                sm.pop(s[l])
            l+=1
            if sm==pm:
                res.append(l)
        return res