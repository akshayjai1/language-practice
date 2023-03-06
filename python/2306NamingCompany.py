import collections
class Solution:
    def distinctNames(self, ideas: list[str]) -> int:
        m = collections.defaultdict(set)
        for w in ideas:
            m[w[0]].add(w[1:])
        res = 0
        for c1 in m:
            for c2 in m:
                if c1 == c2:
                    continue
                common = 0
                for d in m[c2]:
                    if d in m[c1]:
                        common+=1

                distinct1 = len(m[c1]) - common
                distinct2 = len(m[c2]) - common
                res+=distinct1*distinct2
        return res