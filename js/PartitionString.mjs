/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  const d = (k + '').length
  let count = 0
  let i = 0
  while (i < s.length) {
    const sl = s.slice(i, i + d)
    const sln = parseInt(sl)
    if (d > 1) {
      const sl1 = s.slice(i, i + d - 1)
      const sln1 = parseInt(sl1)
      if (sln <= k) {
        count += 1
        i += d
      } else if (sln1 <= k) {
        count += 1
        i = i + d - 1
      }
    } else {
      if (sln <= k) {
        count += d
        i += d
      } else {
        return -1
      }
    }
  }
  return count
}
console.log('hello')
console.log(minimumPartition('165462', 60))
console.log('return value')
