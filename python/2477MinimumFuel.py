# https://www.youtube.com/watch?v=I3lnDUIzIG4
# https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3173765/clean-codes-full-explanation-dfs-c-java-python3/
from math import ceil
from collections import defaultdict, deque
class Solution2:
  def minimumFuelCost(self, roads: list[list[int]], seats: int) -> int:
    ans = 0
    graph = [[] for _ in range(len(roads) + 1)]

    for u, v in roads:
      graph[u].append(v)
      graph[v].append(u)

    def dfs(u: int, prev: int) -> int:
      nonlocal ans
      people = 1
      for v in graph[u]:
        if v != prev:
          people += dfs(v, u)
      if u > 0:
        # # of cars needed.
        ans += int(ceil(people / seats))
      return people

    dfs(0, -1)
    return ans
class Solution:
  def minimumFuelCost(self,roads:list[list[int]],seats:int)->int:
    ad = defaultdict(list)
    for src,dst in roads:
      ad[src].append(dst)
      ad[dst].append(src)

    def dfs(node, parent):
      nonlocal res
      passenger  = 0
      for child in ad[node]:
        if child != parent:
          p = dfs(child,node)
          passenger += p
          t = ceil(p/seats)
          # print(f" t = {t}")
          res+=int(t)
          print(f"  makes total passenger = {passenger} and result to increase by {t} -> {res}")
          # print(f"\n increased res = {res}")
      return passenger + 1
    res = 0
    dfs(0,-1)
    return res

roads, seats = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], 2
# roads seats = [[0,1],[0,2],[0,3]], 5

s = Solution()
ans = s.minimumFuelCost(roads,seats)
print(f"ans is {ans}")


def printTree1(ad, root, level=0):
    print("  " * level, root.x)
    for child in root.children:
        printTree1(ad, child, level + 1)

def printTree2(ad, root, level, parent):
    print("  " * level, root)
    for child in ad[root]:
        if child != parent:
          printTree2(ad, child, level + 1,root)

def printTree(roads):
  ad=defaultdict(list)
  for s,d in roads:
    ad[s].append(d)
    ad[d].append(s)
  printTree2(ad, 0,0,-1)


printTree(roads)
s2 = Solution2()
ans2 = s2.minimumFuelCost(roads,seats)
print(f"ans2 =  {ans2}")
# https://simonhessner.de/python-3-recursively-print-structured-tree-including-hierarchy-markers-using-depth-first-search/