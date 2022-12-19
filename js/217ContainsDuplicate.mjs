/** https://leetcode.com/problems/contains-duplicate/solutions/2925018/easiest-js-solution-use-map-to-know-if-item-already-present/
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  var m = {}
  for (let n of nums) {
    if (m[n]) {
      return true
    } else {
      m[n] = 1
    }
  }
  return false
}
