class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        s,e = newInterval
        l,r=[],[]
        for i in intervals:
            if i[1] < s:
                l.append(i)
            elif i[0]> e:
                r.append(i)
            else:
                s=min(s,i[0])
                e=max(e,i[1])
        l.append([s,e])
        for j in r:
            l.append(j)
        return l