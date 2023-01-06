/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  const remaining = capacity.map((c, i) => c - rocks[i]).sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < remaining.length; i++) {
    if (remaining[i] === 0) {
      count++
    } else {
      if (additionalRocks >= remaining[i]) {
        additionalRocks -= remaining[i]
        count++
      } else {
        break
      }
    }
  }
  return count
}
