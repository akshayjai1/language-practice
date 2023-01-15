// https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043600/easy-to-grok-stateless-c-solution-with-comments/
public class Solution {
    public int LongestPath(int[] parent, string s) {
        var n = parent.Length;
        var adj = Enumerable.Range(0,n).ToDictionary(x=>x,x=>new HashSet<int>());

        for(var i = 0; i < n; i++){
            if(parent[i]!= -1){
                adj[parent[i]].Add(i);
            }
        }
        return getLongest(0,adj,s).longestPath;
    }
    private (int longestPath, int oneSideLongest, char c) getLongest(int node, Dictionary<int, HashSet<int>> adj, string s){
        if(!adj.Any()){
            return (1,1,s[node]);
        }
        var nodeTupleArray = adj[node].Select(x=>getLongest(x,adj,s)).ToArray();
        var longestTwoLength = nodeTupleArray.Where(x=>x.c != s[node])
        .OrderByDescending(s=>s.oneSideLongest)
        .Select(x=>x.oneSideLongest).Take(2).ToArray();
        var ns = longestTwoLength.Any() ? longestTwoLength.Sum() : 0;
        var maxSubtreePathLength = nodeTupleArray.Select(x=>x.Item1).Max();
        return (
            Math.Max(nodeTupleArray.Select(x=>x.longestPath).Max(),ns + 1),
            // Math.Max(nodeTupleArray.Max(x=>x.longestPath),ns + 1),
            (longestTwoLength.Any() ? longestTwoLength.Max() : 0) + 1,
            s[node]
            );

        //    next.Select(x => x.Item1).Max(),
    }
}