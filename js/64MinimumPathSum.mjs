import { print2d } from './util.mjs';
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const r = grid.length;
  if (r < 1) return 0;
  const c = grid[0].length;
  const twoD = [...Array(r)].map((e) => Array(c).fill(0));
  twoD[0][0] = grid[0][0];
  // console.log('grid is');
  // print2d(grid);
  for (let i = 1; i < c; i++) {
    twoD[0][i] = twoD[0][i - 1] + grid[0][i];
    // console.log(`twod [0][i] [${0}][${i}] = ${twoD[0][i]}`);
  }
  // console.log('twod after filling first row');
  // print2d(twoD);
  for (let i = 1; i < r; i++) {
    twoD[i][0] = twoD[i - 1][0] + grid[i][0];
  }
  // print2d(twoD);
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      twoD[i][j] = grid[i][j] + Math.min(twoD[i - 1][j], twoD[i][j - 1]);
    }
  }
  return twoD[r - 1][c - 1];
};
const s = [];
s.push([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
for (let i in s) {
  console.log(i, ' minPath sum = ', minPathSum(s[i]));
}
//https://www.youtube.com/watch?v=t1shZ8_s6jc
