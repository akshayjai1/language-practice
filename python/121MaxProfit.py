class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        i,j,p = 0,1,0
        while j < len(prices):
            cp = prices[j] - prices[i]
            p = max(p,cp)
            if cp < 0:
                i = j
            else:
                p = max(p,cp)
            j+=1
        return p
"""
use 2 pointer
i,j, if current profit is -ve, it means, sell is lower, so we purchase at this selling point,
therefore i = j
else keep on increasing j, till end. and also keeping track of max profit

"""