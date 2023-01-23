class Solution:
    def rob(self, nums: List[int]) -> int:
        r = 0
        first = 0
        second = nums[0]
        for i in range(1,len(nums)):
            third = max(first+nums[i],second)
            first = second
            second = third
        return second