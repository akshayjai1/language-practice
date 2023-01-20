// solution youtube video from neetcode,
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.push(0)
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  }
  return Math.min(cost[0], cost[1])
}

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length
  dp = []
  for (let i = 0; i < cost.length; i++) {
    if (i < 2) {
      dp[i] = cost[i]
    } else {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
  }
  return Math.min(dp[n - 1], dp[n - 2])
}
