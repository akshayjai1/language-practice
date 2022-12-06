/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (x) {
  const m = { 1: 1, 2: 2 };
  function f(n, m) {
    if (m[n]) return m[n];
    let i = 3;
    while (i <= x) {
      m[i] = f(i - 1, m) + f(i - 2, m);
      i++;
    }
    return m[n];
  }
  return f(x, m);
};
// https://leetcode.com/problems/climbing-stairs/discuss/25299/Basically-it's-a-fibonacci.