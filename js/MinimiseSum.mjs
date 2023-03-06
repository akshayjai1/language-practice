// biweekly contest 98

var minimizeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let a = nums[0],
    b = nums[1],
    c = nums[2],
    f = nums.pop(),
    e = nums.pop(),
    d = nums.pop()
  let d1 = Math.abs(d - a),
    d2 = Math.abs(e - b),
    d3 = Math.abs(f - c)
  let g = Math.min(d1, d2)
  return Math.min(g, d3)
}

console.log()
console.log(minimizeSum([1, 4, 5, 7, 8]))
