/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  var res = []
  var map = {}
  function iterate(ind, temp) {
    if (map[temp]) return
    if (temp.length >= 2) res.push(temp)
    for (let i = ind; i < nums.length; i++) {
      if (temp[temp.length - 1] > nums[i]) continue
      map[temp] = true
      iterate(i + 1, [...temp, nums[i]])
    }
  }
  iterate(0, [])
  return res
}
