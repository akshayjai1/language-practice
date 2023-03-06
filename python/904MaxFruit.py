# sliding window
from collections import defaultdict
class Solution:
    def totalFruit(self, fruits: list[int]) -> int:
        res,total,l = 0,0,0
        count = defaultdict(int)
        for i in range(len(fruits)):
            count[fruits[i]]+=1
            total+=1

            while len(count) > 2:
                count[fruits[l]]-=1
                total-=1
                if not count[fruits[l]]:
                    count.pop(fruits[l])
                l+=1
            res = max(res,total)
        return res