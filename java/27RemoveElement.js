/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== val) {
      nums[i] = nums[k];
      i++;
    }
  }
  return i;
};
