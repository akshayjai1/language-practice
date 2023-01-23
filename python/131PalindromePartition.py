class Solution:
	def partition(self, s:str)->list[list[str]]:
		res,part = [],[]
		def dfs(i):
			# nonlocal part
			print(f'starting dfs with i = {i}')
			if i >= len(s):
				print(f'appending part {part}')
				print()
				return res.append(part.copy())
			for j in range(i, len(s)):
				# part = []
				if self.isPali(s,i,j):
					part.append(s[i:j+1])
					print(f'after appending part is {part}')
					dfs(j+1)
					part.pop()
					print(f'after popping part is {part}')
		dfs(0)
		return res

	def isPali(self,s,i,j):
		while i < j:
			if s[i]!=s[j]:
				return False
			i,j=i+1,j-1
		return True
	def check(self,s):
		res=[];
		def fd(i,ar):
			if i >= len(s):
				return res.append(ar.copy())
			for j in range(i,len(s)):
				if self.isPali(s,i,j):
					ar.append(s[i:j+1])
					fd(j+1,ar)
		fd(0,[])
		return res

x = Solution()
# c = x.partition("aba")
c = x.check("aba")
print(c)