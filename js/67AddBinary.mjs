/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aa = a
    .split('')
    .map((e) => parseInt(e))
    .reverse()
  const bb = b
    .split('')
    .map((e) => parseInt(e))
    .reverse()
  let l = Math.min(aa.length, bb.length)
  let carry = 0
  if (aa.length < bb.length) {
    let t = bb
    bb = aa
    aa = t
  }
  let i = 0
  let r = []
  for (; i < Math.max(aa.length, bb.length); i++) {
    let ai = i >= aa.length ? 0 : aa[i],
      bi = i >= bb.length ? 0 : bb[i]
    let ci = ai + bi + carry
    const res = getCiCarry(ci)
    ci = res.ci
    carry = res.carry
    r.push(ci)
  }
  if (carry == 1) {
    r.push(1)
  }
  console.log(aa)
  console.log(bb)
  console.log(r)
  return r.reverse().join('')
}
console.log()
// let c = addBinary('1010', '1011')
// let c = addBinary('11', '1')
let c = addBinary('10111', '10')
console.log(c)
function getCiCarry(ci) {
  let carry
  if (ci > 1) {
    ci = ci % 2
    carry = 1
  } else {
    carry = 0
  }
  return { ci, carry }
}
