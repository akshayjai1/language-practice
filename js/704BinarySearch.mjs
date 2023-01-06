/* we keep two pointers
lo = 0, hi = len - 1
mid = lo + Math.floor((hi - lo) / 2)
while l < h
		if (target > mid){
		    lo = mid + 1
		} else {
		    hi = mid
		}
check if target === nums[l] ? l : -1;
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
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
  return nums[l] === target ? l : -1
}
