/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let o = []
  for (let i = 0; i < n; i++) {
    o.push(nums[i])
    o.push(nums[i + n])
  }
  return o
}
