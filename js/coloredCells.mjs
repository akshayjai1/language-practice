/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  let count = 1
  for (let i = 1; i < n; i++) {
    count += i * 4
  }
  return count
}
