/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => parseInt(a) - parseInt(b))
  console.log(nums)
  let res = []
  let count
  for (let q of queries) {
    count = 0
    for (let i = 0; i < nums.length; i++) {
      if (q >= nums[i]) {
        q -= nums[i]
        count++
      } else {
        break
      }
    }
    res.push(count)
  }
  return res
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]))
