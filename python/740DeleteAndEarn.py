class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        count = Counter(nums)
        n = sorted(list(set(nums)))

        e1,e2=0,0
        for i in range(len(n)):
          curr_earn = count[n[i]]*n[i]
          if i > 0 and n[i] == n[i-1] + 1:
            temp = e2
            e2 = max(curr_earn+e1, e2)
            e1 = temp
          else:
            temp = e2
            e2 = curr_earn + e2
            e1 = temp
        return e2

# // neet code