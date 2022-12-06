class Solution {
public:
    int mini = INT_MAX;
    set<int> v;
    int minScore(int n, vector<vector<int>>& roads) {
        map<pair<int,int>,int> m;
        for (auto x:roads){
          m[{min(x[0],x[1]), max(x[0],x[1])}] = x[2];
        }
        vector<vector<int>> graph(n+1);

      for(auto x: roads){
        graph[x[0]].push_back(x[1]);
        graph[x[1]].push_back(x[0]);
      }

      vector<int> visited(n+1,0);
      dfs(1,graph, visited);

      for(auto y:m){
        if(v.find(y.first.first)!=v.end() || v.find(y.first.second)!=v.end()){
          mini = min(y.second,mini);
        }
      }
      return mini;

    }

    void dfs(int root, vector<vector<int>> &graph, vector<int> &visited){
      if(visited[root] == 1)
        return;
      visited[root] = 1;
      for(auto o:graph[root]){
        if(visited[o] != 1){
          v.insert(o);
          dfs(o,graph,visited);
        }

      }
      return;
    }
};