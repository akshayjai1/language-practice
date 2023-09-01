/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0,
    left = 0,
    right = n - 1,
    bottom = n - 1
  let count = 1,
    dir = 0
  let s = Array(n)
    .fill(0)
    .map((_) => Array(n).fill(0))
  while (count <= n * n) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        s[top][i] = count
        count++
      }
      top++
      dir++
      console.log('s1', s)
    } else if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        s[i][right] = count
        count++
      }
      dir++
      right--
      console.log('s2', s)
    } else if (dir == 2) {
      for (let i = right; i >= left; i--) {
        s[bottom][i] = count
        count++
      }
      dir++
      bottom--
      console.log('s3', s)
    } else if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        s[i][left] = count
        count++
      }
      dir = 0
      left++
      console.log('s4', s)
    }
  }
  return s
}
console.log(generateMatrix(3))
