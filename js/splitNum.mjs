/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  let j = (num + '').split('')
  j.sort((a, b) => parseInt(a) - parseInt(b))
  let a = [],
    b = []
  for (let i = 0; i < j.length; i += 2) {
    a.push(j[i])
    if (i + 1 < j.length) {
      b.push(j[i + 1])
    }
  }
  let aa = a.join('')
  let bb = b.join('')
  let na = parseInt(aa)
  let nb = parseInt(bb)
  return na + nb
}
