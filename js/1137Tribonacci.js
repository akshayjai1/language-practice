/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let cache = { 0: 0, 1: 1, 2: 1 }
  const getTri = (num, map) => {
    if (map[num] !== undefined) {
      return map[num]
    } else {
      map[num] =
        getTri(num - 1, map) + getTri(num - 2, map) + getTri(num - 3, map)
      return map[num]
    }
  }
  return getTri(n, cache)
}

// another solution
/*
keep map, and use cache. same as 509 fibonacci

*/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci1 = function (n) {
  let m = { 0: 0, 1: 1, 2: 1 }
  let i = 3
  while (i <= n) {
    m[i] = m[i - 3] + m[i - 2] + m[i - 1]
    i++
  }
  return m[n]
}
