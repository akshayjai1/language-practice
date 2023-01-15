// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/623686/java-detailed-explanation-build-tree-dfs/
class Solution {
public:
    vector<int> adj[100005];
    vector<bool> fruit;
    bool visited[100005];

    int dfs(int node){
        int childCost = 0;
        visited[node] = true;
        for(auto i: adj[node]){
            if(visited[i]) continue;
            childCost += dfs(i);
        }
        if((childCost >0 || fruit[node]) && node != 0){
            childCost += 2;
        }
        return childCost;
    }
    int minTime(int n, vector<vector<int>>& edges, vector<bool>& hasApple) {
        for(int i = 0; i < edges.size(); i++){
            auto e = edges[i];
            int start = e[0];
            int end = e[1];
            adj[start].push_back(end);
            adj[end].push_back(start);
        }
        fruit = hasApple;

        return dfs(0);
    }
};