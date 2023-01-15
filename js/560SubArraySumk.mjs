/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let m = new Map()
  let sum = 0
  let count = 0
  m.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (m.has(sum - k)) count += m.get(sum - k)

    if (m.has(sum)) m.set(sum, m.get(sum) + 1)
    else m.set(sum, 1)
  }
  return count
}
