/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0,
    h = nums.length - 1,
    mid
  if (nums.length == 1) {
    return nums[0]
  } else if (nums[l] != nums[l + 1]) {
    return nums[l]
  } else if (nums[h] != nums[h - 1]) {
    return nums[h]
  }
  while (l <= h) {
    m = l + Math.floor((h - l) / 2)
    if (nums[m] != nums[m - 1] && nums[m] != nums[m + 1]) {
      return nums[m]
    } else if (
      (m % 2 == 0 && nums[m] == nums[m + 1]) ||
      (m % 2 == 1 && nums[m] == nums[m - 1])
    ) {
      l = m + 1
    } else {
      h = m - 1
    }
  }
  return -1
}
/* concepts
boundary check; index pair
*/
