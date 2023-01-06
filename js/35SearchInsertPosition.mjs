/* simple binary search 704, with last check, about when to add + 1 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0,
    h = nums.length - 1
  while (l < h) {
    let m = l + Math.floor((h - l) / 2)
    if (target > nums[m]) {
      l = m + 1
    } else {
      h = m
    }
  }
  return target == nums[l] ? l : target < nums[l] ? l : l + 1
}
