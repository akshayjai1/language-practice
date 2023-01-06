/* We have to use kadane's algorithm
we keep a sum variable c, and max variable = m.
and we keep on incrementing the adding in c, and updating m, once c becomes negative, we make it zero
return the m;
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let m = -Infinity
  let sum = 0
  for (let i of nums) {
    sum += i
    m = Math.max(m, sum)
    if (sum < 0) sum = 0
  }
  return m
}
