import math
import heapq
def maxKelements(nums: list[int], k: int) -> int:
		h = []
		for i in nums:
				heapq.heappush(h,i*-1)

		r=0
		n = 0
		while k > 0:
				k-=1
				l = heapq.heappop(h)
				n = math.ceil(-n/3)
				heapq.heappush(h,n * -1)
				r-=l
		return r

# a = [10,10,10,10,10]
a = [1,10,3,3,3]
print()
print(f" out put = {maxKelements(a,3)}")
print()