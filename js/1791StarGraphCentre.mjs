/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  map = {}
  for (let [i, j] of edges) {
    if (map[i]) {
      map[i].push(j)
    } else {
      map[i] = [j]
    }
    if (map[j]) {
      map[j].push(i)
    } else {
      map[j] = [i]
    }
    if (map[i].length > 1) return i
    if (map[j].length > 1) return j
  }
}
