class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        l,r,ls,rs,n=[],[],0,0,len(nums)
        for i in range(n):
            l.append(ls)
            ls+=nums[i]
            r.append(rs)
            rs+=nums[n-i-1]
        r.reverse()
        for i in range(n):
            if r[i] == l[i]:
                return i
        return -1
