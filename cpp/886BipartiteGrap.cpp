class Solution {
public:
    bool isBipartite(vector<vector<int>> &adj, vector<int> &colors, int src)
    {
        deque<int> q;
        q.push_back(src);

        colors[src] = 0;

        while (!q.empty())
        {
            int u = q.front();
            q.pop_front();

            int u_color = colors[u];

            for (auto &v : adj[u])
            {
                if (colors[v] == -1)
                {
                    colors[v] = (u_color == 0) ? 1 : 0;
                    q.push_back(v);
                    continue;
                }

                if (colors[v] == u_color)
                    return false;
            }
        }

        return true;
    }

    bool possibleBipartition(int n, vector<vector<int>> &dislikes)
    {
        vector<vector<int>> adj(n + 1);

        for (auto &pair : dislikes)
        {
            int u = pair[0];
            int v = pair[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
        }

        vector<int> colors(n + 1, -1);

        for (int u = 1; u <= n; u++)
        {
            if (colors[u] == -1)
            {
                if (!isBipartite(adj, colors, u))
                    return false;
            }
        }

        return true;
    }
};