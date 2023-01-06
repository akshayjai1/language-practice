#include <stdio.h>
#include <stdlib.h>
#include <bits/stdc++.h>

using namespace std;

// first sink the islands connected to edges. then sink and count remaining islands
class Solution {
public:
    vector<vector<int>> directions = {{1,0},{-1,0},{0,1},{0,-1}};
    vector<vector<int>> g;
    int totalIslands;
    int rows;
    int columns;
    void dfs(int i, int j){
        g[i][j] = 1;
        for(auto d: directions){
            int nx = i + d[0];
            int ny = j + d[1];
            if(nx < 0 || ny < 0 || nx == rows || ny == columns){
                continue;
            }
            if(g[nx][ny] == 0){
                dfs(nx,ny);
            }
        }
    }
    int closedIsland(vector<vector<int>>& grid) {
        rows = grid.size();columns = grid[0].size();g = grid;
        for(int i = 0; i < rows; i++){
            for (int j = 0; j < columns; j++){
                if(i == 0 || j == 0 || i == (rows - 1 ) || j == (columns - 1)){
                    if(g[i][j] == 0){
                        dfs(i,j);
                    }
                }
            }
        }
        for(int i = 0; i < rows; i++){
            for (int j = 0; j < columns; j++){
                if(g[i][j] == 0){
                    dfs(i,j);
                    totalIslands+=1;
                }
            }
        }
        return totalIslands;
    }
};