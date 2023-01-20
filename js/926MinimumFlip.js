/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let onesSeenSoFar = 0
  let flips = 0
  for (let i of s) {
    if (i === '1') {
      onesSeenSoFar++
    } else {
      flips = Math.min(flips + 1, onesSeenSoFar)
    }
  }
  return flips
}
// https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1396775/easy-javascript-solution-with-detailed-explanation-o-n-time-o-1-space/
