/*
keep a sum variable initialized to 0
map over nums, to add sum to each element in the map iteration, we will have the running sum in the map result
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let s = 0
  return nums.map((e) => {
    s += e
    return s
  })
}
