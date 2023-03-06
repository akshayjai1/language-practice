/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let rev = num.reverse()
  let snumRev = (k + '')
    .split('')
    .map((e) => parseInt(e))
    .reverse()
  let carry = 0
  let m = rev.length - snumRev.length
  if (m > 0) {
    while (m-- > 0) {
      snumRev.push(0)
    }
  } else if (m < 0) {
    while (m++ < 0) {
      rev.push(0)
    }
  }

  for (let i = 0; i < rev.length; i++) {
    let n = rev[i] + carry + snumRev[i]
    // console.log('this is n = ', n)
    if (n > 9) {
      carry = 1
      rev[i] = n - 10
    } else {
      rev[i] = n
      carry = 0
    }
  }
  if (carry === 1) {
    rev.push(1)
  }
  return rev.reverse()
}
console.log('--\n start \n')
let s = addToArrayForm([1, 2, 0, 0], 34)
console.log(s)
