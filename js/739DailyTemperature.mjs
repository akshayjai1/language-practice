/**
 * https://leetcode.com/problems/daily-temperatures/solutions/2924973/monotonic-stack-and-use-of-extra-memory/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const s = []
  const result = Array(temperatures.length).fill(0)
  for (let i in temperatures) {
    while (s.length > 0 && temperatures[i] > s[s.length - 1][1]) {
      const [ind, temp] = s.pop()
      result[ind] = i - ind
    }
    s.push([i, temperatures[i]])
  }
  return result
}
