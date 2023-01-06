class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        a =[-s for s in piles]
        heapq.heapify(a)
        for i in range(k):
            heapq.heapreplace(a,a[0]-int(a[0]/2))
        return -sum(a)