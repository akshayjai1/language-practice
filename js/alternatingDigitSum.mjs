/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let s = 0
  let rs = 0
  let i = 1
  while (n > 0) {
    let r = n % 10
    s += i * r
    rs += -i * r
    n = parseInt(n / 10)
    i *= -1
  }
  if (i == -1) {
    return s
  } else {
    return rs
  }
}
