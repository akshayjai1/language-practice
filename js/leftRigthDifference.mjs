var leftRigthDifference = function (nums) {
  let ls = 0,
    i = 0,
    l = [],
    r = [],
    rs = 0,
    j = 0
  while (i < nums.length) {
    l.push(ls)
    ls += nums[i]
    i++
  }
  // console.log(l, i)
  while (--i > -1) {
    r[i] = rs
    rs += nums[i]
  }
  // console.log(r, i)
  let a = []
  for (let i = 0; i < nums.length; i++) {
    a.push(Math.abs(l[i] - r[i]))
  }
  return a
}
console.log()
console.log('ans = ', leftRigthDifference([10, 4, 8, 3]))
console.log('ans should be', [15, 1, 11, 22])
