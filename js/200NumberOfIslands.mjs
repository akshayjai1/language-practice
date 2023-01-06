/*
seems like a simple graph problem, we will have to move in 4 directions, so use dx,dy of [1,0,..]
iterate over every element of the grid, and call dfs if grid element is 1, also do count++;
thus, we we will get number of islands equal to number of times, dfs has to be called from the n square iteration

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let r = grid.length
  let c = grid[0].length
  function dfs(x, y) {
    grid[x][y] = 0
    for (let [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const [nx, ny] = [x + dx, y + dy]
      if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
        continue
      }
      if (grid[nx][ny] == '1') {
        dfs(nx, ny)
      }
    }
  }
  let count = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 1) {
        dfs(i, j)
        count++
      }
    }
  }
  return count
}
