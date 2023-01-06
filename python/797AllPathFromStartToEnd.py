# knowledge center https://www.youtube.com/watch?v=SZ3zpzQk2jg
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        result = []
        def dfs(path,end):
            if end == len(graph) - 1:
                result.append(path + [end])
            else:
                for v in graph[end]:
                    dfs(path + [end],v)
        dfs([],0)
        return result