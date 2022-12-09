/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n <= 3) {
    return n;
  }
  let count = n;
  for (let i = 1; i * i <= n; i++) {
    count = Math.min(count, 1 + numSquares(n - i * i));
  }
  return count;
};
// https://leetcode.com/problems/perfect-squares/discuss/71495/An-easy-understanding-DP-solution-in-Java
// https://www.youtube.com/watch?v=1xfx6M_GqFk

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let a = Array(n + 1).fill(Infinity);
  a[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k * k <= i; k++) {
      a[i] = Math.min(a[i], a[i - k * k] + 1);
    }
  }
  return a[n];
};
// https://leetcode.com/problems/perfect-squares/discuss/1520544/Javascript-Solution-DP
