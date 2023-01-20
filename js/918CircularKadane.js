/**
 *
 * @param {*} x array of integers
 */
function kadane(x) {
  let n = x.length
  let sum = x[0]
  let ans = x[0]
  for (let i = 1; i < n; i++) {
    sum += x[i]
    if (sum < x[i]) sum = x[i]
    ans = Math.max(ans, sum)
  }
  return ans
}

var maxSubarraySumCircular = function (nums) {
  let sum = 0
  let maxSum = nums[0],
    currentMaxSum = 0
  let minSum = nums[0],
    currentMinSum = 0
  for (let n of nums) {
    sum += n
    currentMaxSum = Math.max(n, currentMaxSum + n)
    maxSum = Math.max(maxSum, currentMaxSum)
    currentMinSum = Math.min(n, currentMinSum + n)
    minSum = Math.min(minSum, currentMinSum)
    console.log(minSum, maxSum, sum)
  }
  if (maxSum < 0) return maxSum
  return Math.max(maxSum, sum - minSum)
}
// console.log(maxSubarraySumCircular([1, -2, 3, -2]))
console.log(maxSubarraySumCircular([-3, -2, -3]))
