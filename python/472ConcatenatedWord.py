class Solution:
    def findAllConcatenatedWordsInADict(self, words: list[str]) -> list[str]:
        word_set = set(words)
        dp={}
        def dfs(word):
						if word in dp:
							return dp[word]
            for i in range(1,len(word)):
                prefix = word[:i]
                suffix = word[i:]
                if (((prefix in word_set) and (suffix in word_set)) or ((prefix in word_set) and dfs(suffix))):
                    dp[word]=True
                else:
                  dp[word] = False
                return dp[word]
        res = []
        for w in words:
            if dfs(w):
                res.append(w)
        return res

d = Solution()
io = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
c=d.findAllConcatenatedWordsInADict(io)
print()
print(c)
print()