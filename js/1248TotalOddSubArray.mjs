/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let nm = nums.map((e) => e % 2)
  let count = 0
  let sum = 0
  let m = new Map()
  m.set(0, 1)
  for (let i = 0; i < nm.length; i++) {
    sum += nm[i]
    if (m.has(sum - k)) {
      count += m.get(sum - k)
    }
    if (m.has(sum)) {
      m.set(sum, m.get(sum) + 1)
    } else {
      m.set(sum, 1)
    }
  }
  return count
}
