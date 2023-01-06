# Neet code 11, 2 pointer approach
class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxa = 0
        l,r = 0, len(height) - 1
        while l < r:
            maxa = max(maxa,(r-l) * (min(height[r],height[l])))
            if height[r] > height[l]:
                l+=1
            else:
                r-=1
        return maxa