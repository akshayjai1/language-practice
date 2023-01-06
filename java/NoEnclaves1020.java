/* first sink the land on edges, and then do the needed count using dfs */
class Solution {
    int count,rows,columns;
    int [][] g;
    int [][] directions = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};

    public void dfs(int i,int j, boolean shouldCount){
        this.g[i][j] = 0;
        if(shouldCount){
            this.count++;
        }
        for(int[] d: this.directions){
            int nx = i + d[0];
            int ny = j + d[1];
            if(nx < 0 || ny < 0 || nx == this.rows || ny == this.columns){
                continue;
            }
            if(this.g[nx][ny] == 1){
                dfs(nx,ny, shouldCount);
            }
        }
    }
    public int numEnclaves(int[][] grid) {
        this.rows = grid.length; this.columns = grid[0].length; this.g = grid;
        for(int i = 0; i < this.rows; i++){
            for(int j = 0; j < this.columns; j++){
                if(i == 0 || j == 0 || i == (this.rows - 1) || j == ( this.columns - 1)){
                    if(this.g[i][j] == 1){
                        dfs(i,j,false);
                    }
                }
            }
        }
        for(int i = 0; i < this.rows; i++){
            for(int j = 0; j < this.columns; j++){
                if(this.g[i][j] == 1){
                    dfs(i,j,true);
                }
            }
        }
        return this.count;
    }
}