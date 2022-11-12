class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        for j in range(1,len(nums)):
            print(f' h  - {j}')
            if nums[j] != nums[j - 1]:
                i+=1
                nums[i] = nums[j]
        return i + 1
print('hi')
c = Solution()
cc = c.removeDuplicates([1,2,2])
print('ji')
print(cc)