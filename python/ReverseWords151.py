class Solution1:
	def reverseWords(self, s:str)-> str :
		return ' '.join(s.strip().split()[::-1])

class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))
a = Solution()
v = a.reverseWords("the   sky is ")
print(v)