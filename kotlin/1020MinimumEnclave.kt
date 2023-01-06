class Solution {
    fun numEnclaves(grid: Array<IntArray>): Int {
        val rows = grid.size;val cols = grid[0].size;var count = 0;
        val directions = arrayOf(intArrayOf(1,0),intArrayOf(-1,0),intArrayOf(0,1),intArrayOf(0,-1));
        fun dfs(i: Int, j: Int, shouldCount:Boolean){
            grid[i][j] = 0
            if (shouldCount) count+=1;
            for(d in directions){
                val nx = i + d[0]
                val ny = j + d[1]
                if(nx < 0 || ny < 0 || nx == rows || ny == cols){
                    continue;
                }
                if(grid[nx][ny] == 1){
                    dfs(nx,ny, shouldCount)
                }
            }

        }

        for(i in 0 until grid.size){
            for( j in 0 until grid[0].size){
                if(i == 0 || j == 0 || i == (rows - 1) || j == (cols - 1)){
                    if(grid[i][j] == 1){
                        dfs(i,j,false);
                    }
                }
            }
        }
        for(i in 0 until grid.size) {
            for(j in 0 until grid[0].size) {
                if(grid[i][j] == 1){
                    dfs(i, j, true);
                }
            }
        }
        return count;
    };
}