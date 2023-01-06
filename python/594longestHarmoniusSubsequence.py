class Solution:
    def findLHS(self, nums: List[int]) -> int:
        # Write your code here.
        l = {}
        for i in nums:
            l[i] = (l[i] + 1) if i in l else 1
        m=0
        for k in l.keys():
            if (k -1) in l:
               count = l[k-1]
               m=max(m,l[k]+count)
        return m