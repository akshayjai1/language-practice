// Hello world! Cplayground is an online sandbox that makes it easy to try out
// code.

#include <stdio.h>
#include <stdlib.h>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<vector<int>> g;
    int rows = 0;
    int columns = 0;
    int maxArea = 0;
    int currentArea = 0;
    void dfs(int i, int j){
        g[i][j] = 0;
        currentArea +=1;
        vector<vector<int>> v = {{1,0},{-1,0},{0,1},{0,-1}};
        for (auto c:v){
            int nx = i + c[0];
            int ny = j + c[1];
            if (nx < 0 || ny < 0 || nx == rows || ny == columns){
                continue;
            }
            if(g[nx][ny] == 1)
              dfs(nx,ny);
        }

    }
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        g = grid;
        rows = grid.size();
        columns = grid[0].size();
        for(int i = 0; i < rows; i++){
            for(int j = 0; j < columns; j++){
                if(g[i][j] == 1){
                    // cout << g[i][j];
                    dfs(i,j);
                    // cout << "max area i " << maxArea<<" current area is " << currentArea<<endl;
                    if(maxArea < currentArea){
                        maxArea = currentArea;
                    }
                    currentArea = 0;
                }
            }
        }
     return maxArea;
    }
};
int main() {
    Solution* s = new Solution();
    vector<vector<int>> d = {{0,0,1,0,0,0,0,1,0,0,0,0,0},
    {0,0,0,0,0,0,0,1,1,1,0,0,0},
    {0,1,1,0,1,0,0,0,0,0,0,0,0},
    {0,1,0,0,1,1,0,0,1,0,1,0,0},{0,1,0,0,1,1,0,0,1,1,1,0,0},
    {0,0,0,0,0,0,0,0,0,0,1,0,0},{0,0,0,0,0,0,0,1,1,1,0,0,0},{0,0,0,0,0,0,0,1,1,0,0,0,0}};
    int m = s->maxAreaOfIsland(d);
    cout << "max area is " << m << endl;
    return 0;
}