// biweekly contest 98 leetcode 6360
/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function (nums) {
  nums.sort((a, b) => a - b)
  let m = {}
  for (let c of nums) {
    m[c] = (m[c] ?? 0) + 1
  }
  let ans = 1
  while (nums.includes(ans)) {
    ans *= 2
  }
  return ans
}
