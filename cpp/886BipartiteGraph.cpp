class Solution {
public:
    bool isBipartite(vector<vector<int>> & adj, vector<int> color, int n, int node){
        // get elements of adjacency list for each pointer and color it, if the color is same, then we return false, signifying it it no bipartite
        queue<int> q;
        q.push(node);
        color[node]=1;
        while(!q.empty()){
            int current = q.front();
            q.pop();
            int currentPointerColor = color[current];
            int colorToAssign = 1 - currentPointerColor;
            for(int e: adj[current]){
                if(color[e]==currentPointerColor){
                    return false;
                }
                if(color[e]==-1){
                    color[e] = colorToAssign;
                    q.push(e);
                }
            }
        }
        return true;
    }
    bool possibleBipartition(int n, vector<vector<int>>& dislikes) {
        // step 1: create adjacency matrix
        vector<vector<int>> adj(n+1);
        for(int i=0;i<dislikes.size();i++){
            adj[dislikes[i][0]].push_back(dislikes[i][1]);
            adj[dislikes[i][1]].push_back(dislikes[i][0]);
        }
        // for(auto e:dislikes){
        //     adj[e[0]].push_back(e[1]);
        //     adj[e[1]].push_back(e[0]);
        // }
        // step 2: create color array
        vector<int> color(n+1,-1);
        // step 3: for each person assign color using isBipartite function
        for(int i = 0; i < n; i++){
            if(color[i]== -1){
                if(!isBipartite(adj,color,n,i))
                    return false;
            }
        }
        // step 4: since all persons are colored without exception, that means adjacency matrix creates the graph which is bipartite, therefore we can return true
        return true;
    }
};