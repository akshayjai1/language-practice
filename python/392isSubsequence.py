class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t):
            return False
        if len(s) == 0:
          return True
        j = 0
        for i in range(len(t)):
            if t[i] == s[j]:
                j+=1
            if j == len(s):
                return True
            print(f' i = {i} j = {j} t[i] = {t[i]} s[j] = {s[j]}')
        return False
d=Solution()
e = d.isSubsequence('abc','ahbgdc')
print(f'ans = \n {e}')