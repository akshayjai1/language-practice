/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  function checkWeight(weight) {
    let currWeight = 0,
      currDay = 1
    for (let i = 0; i < weights.length; i++) {
      currWeight += weights[i]
      if (currWeight > weight) {
        currDay++
        currWeight = 0
        i--
      }
    }
    return currDay <= days
  }
  let sum = weights.reduce((a, c) => a + c)
  let max = weights[0]
  for (let i = 1; i < weights.length; i++) {
    if (weights[i] > max) {
      max = weights[i]
    }
  }
  let l = max,
    h = sum,
    m
  while (l < h) {
    m = l + Math.floor((h - l) / 2)
    if (!checkWeight(m)) {
      l = m + 1
    } else {
      h = m
    }
  }
  return l
}
// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216553/binary-search-explained-video-java-c-python/
