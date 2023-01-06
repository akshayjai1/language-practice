class Solution {
  int maxArea = 0;
  int rows = 0;
  int columns = 0;
  int currentArea = 0;
  List<List<int>> g = [[]];
  void dfs(int i, int j){
      g[i][j] = 0;
      currentArea += 1;
      var c = [[1,0],[-1,0],[0,1],[0,-1]];
      for(var e in c){
          int nx = i + e[0];
          int ny = j + e[1];
          if(nx < 0 || nx >= rows || ny < 0 || ny >= columns){
            continue;
          }
          if(g[nx][ny] == 1){
            dfs(nx,ny);
          }
      }
  }

  int maxAreaOfIsland(List<List<int>> grid) {
      g = grid;
      rows = grid.length; columns = grid[0].length;
      for(int i =0; i < rows; i++){
          for(int j = 0; j < columns; j++){
              if(grid[i][j] == 1){
                currentArea = 0;
                dfs(i,j);
              }
              if(currentArea > maxArea){
                maxArea = currentArea;
              }
          }
      }
    return maxArea;
  }
}