import collections
class Solution:
    def maxDistance(self, grid: list[list[int]]) -> int:
        res = -1
        n = len(grid)
        q = collections.deque()
        for r in range(n):
            for c in range(n):
              if grid[r][c]:
                    q.append([r,c])
        dirs=[[0,1],[0,-1],[1,0],[-1,0]]
        while q:
            print(q)
            r,c = q.popleft()
            res = grid[r][c]
            print(f"value of res = {res}")
            for dr,dc in dirs:
                nr,nc = r + dr, c + dc
                if (min(nr,nc)>=0 and max(nr,nc) < n and grid[nr][nc] == 0):
                    q.append([nr,nc])
                    grid[nr][nc] = grid[r][c] + 1
        return res - 1 if res > 1 else -1

g = [[1,0,1],[0,0,0],[1,0,1]]
d = Solution()
k=d.maxDistance(g)
print()
print(k)
print()