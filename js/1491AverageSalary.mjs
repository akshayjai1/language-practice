/*
calculate, sum, maximum and minimum, then subtract maximum and minimum from the sum and calculate average of remaining elements
 */
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let sum = 0,
    mn = salary[0],
    mx = salary[0]
  for (let i of salary) {
    sum += i
    mn = Math.min(i, mn)
    mx = Math.max(i, mx)
  }
  const average = (sum - mx - mn) / (salary.length - 2)
  return average
}
