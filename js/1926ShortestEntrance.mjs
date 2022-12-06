/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
function print2d(grid) {
  let x = '';
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      x += grid[i][j];
    }
    x += '\n';
  }
  console.log(x);
}
export const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
var nearestExit = function (maze, entrance) {
  let m = maze.length,
    n = maze[0].length;
  const isExit = (i, j) => i === 0 || i === m - 1 || j === 0 || j === n - 1;
  const isOut = (i, j) => i < 0 || i >= m || j < 0 || j >= n;
  const [x, y] = entrance;
  console.log('entrance at', entrance);
  const q = [[x, y, 0]];
  maze[x][y] = 'e';
  while (q.length > 0) {
    const [a, b, c] = q.shift();
    for (const [dx, dy] of dir) {
      const i = a + dx,
        j = b + dy;
      console.log('i,j', i, j);
      // print2d(maze);
      if (isOut(i, j)) {
        console.log('out of maze');
        continue;
      }
      const isOpen = maze[i][j] === '.';
      if (!isOpen) {
        console.log('hit wall');
        continue;
      }
      if (isExit(i, j)) {
        console.log('open exit', i, j, c + 1);
        return c + 1;
      }
      maze[i][j] = 'e';
      q.push([i, j, c + 1]);
    }
  }
  return -1;
};

var t = [];
t[0] = [
  [
    ['+', '+', '.', '+'],
    ['.', '.', '.', '+'],
    ['+', '+', '+', '.'],
  ],
  [1, 2],
];
t[1] = [
  [
    ['+', '+', '+'],
    ['.', '.', '.'],
    ['+', '+', '+'],
  ],
  [1, 0],
];
t[2] = [
  [
    ['+', '.', '+', '+', '+', '+', '+'],
    ['+', '.', '+', '.', '.', '.', '+'],
    ['+', '.', '+', '.', '+', '.', '+'],
    ['+', '.', '.', '.', '+', '.', '+'],
    ['+', '+', '+', '+', '+', '.', '+'],
  ],
  [0, 1],
];
// print2d(t[1][0]);
// console.log('the nearest exit is ', print2d(maze), nearestExit(maze, entrance));
console.log('the nearest exit is ', nearestExit(...t[2]));
