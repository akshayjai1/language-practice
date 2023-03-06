/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let i = 0,
    j = nums.length - 1,
    t,
    n
  let sum = 0
  while (i < j) {
    t = nums[i] + '' + nums[j]
    n = parseInt(t)
    sum += n
    console.log('n is', n)
    i++
    j--
  }
  if (i == j) {
    sum += nums[i]
  }
  return sum
}
console.log()
console.log(findTheArrayConcVal([7, 52, 2, 4]))
console.log('')
