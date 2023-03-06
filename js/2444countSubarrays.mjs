/*
algorithm: divide array into parts, where min element is 2 and max element is 5

if there are 3 such parts of array, we have to find, how many subarrays we can create from each of the part
and sum the count of subarrays from each part

Deepcodes code explanation, Brocoders intuition,

https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3254003/day-63-two-pointer-o-n-time-and-o-1-space-easiest-beginner-friendly-sol/
*/

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let minI = (maxI = lastInvalid = -1)
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= maxK && nums[i] >= minK) {
      minI = nums[i] === minK ? i : minI
      maxI = nums[i] === maxK ? i : maxI
      count += Math.max(0, Math.min(minI, maxI) - lastInvalid)
    } else {
      minI = -1
      maxI = -1
      lastInvalid = i
    }
  }
  return count
}
