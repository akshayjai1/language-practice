class Solution {
public:
    int closestMeetingNode(vector<int>& edges, int node1, int node2) {
        vector<int> dist_node_1(edges.size(),-1);
        vector<int> dist_node_2(edges.size(),-1);
        vector<bool> visited(edges.size(),false);
        dfs(node1,edges,visited,0, dist_node_1);
        visited.assign(edges.size(),false);
        dfs(node2,edges,visited,0, dist_node_2);
        vector<int> maxDistance(edges.size(),INT_MIN);
        int resultNode = -1;
        int minDistance = edges.size();
        cout<<"min 1" << endl;
        for(int i:dist_node_1){
            cout << i;
        }
        cout<<"min 2" << endl;
        for(int i:dist_node_2){
            cout << i;
        }

        for(int i = 0; i < edges.size(); i++){
            if(dist_node_1[i] == -1 || dist_node_2[i] == -1) continue;
            // this means node i is reachable from both node 1 and node 2
            int curr_max = max(dist_node_1[i],dist_node_2[i]);
            if(minDistance > curr_max){
                minDistance = curr_max;
                resultNode = i;
            }
        }
        return resultNode;
    }
    void dfs(int node, vector<int> & edges, vector<bool> &visited, int curr_distance, vector<int> &distance_vector){
        if(node == -1 || visited[node]) return;
        cout << "visiting node "  << node << endl;
        visited[node] = true;
        distance_vector[node] = curr_distance;
        dfs(edges[node],edges,visited,curr_distance + 1,distance_vector);
    }
};

int main() {
    Solution *s = new Solution();
    vector<int>v {2,2,3,-1};
    int l = s->closestMeetingNode(v,0,1);
    cout << "ans is "<<l;
}