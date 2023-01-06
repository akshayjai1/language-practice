# refer neetcode 11
"""
use dynamic programming top down approach
three cases,
i+1,j, when there is a match, so we want to check next character in string
i,j+2, when there is not a match and we want to move ahead to next pattern
i+1,j+1 -> when there is exact match
"""
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        cache = {}
        def dfs(i,j):
            if (i,j) in cache:
                return cache[(i,j)]
            if i >= len(s) and j >= len(p):
                return True
            if j >= len(p):
                return False
            match = i < len(s) and (p[j] == "." or s[i] == p[j])
            if (j + 1) < len(p) and p[j+1] == "*":
                cache[(i,j)] = (match and dfs(i+1,j)) or dfs(i,j+2)
                return cache[(i,j)]
            if match:
                cache[(i,j)] = dfs(i+1,j+1)
                return cache[(i,j)]
            cache[(i,j)] = False
            return cache[(i,j)]
        return dfs(0,0)