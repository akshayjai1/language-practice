var minMaxDifference = function (num) {
  let u = (num + '').split('').map((e) => parseInt(e))
  let i = 0
  while (u[i] == 9) {
    i++
  }
  let t = u[i]
  // console.log({ t })
  let ux = u.map((e) => (e == t ? 9 : e))
  let jd = u[0]
  let un = u.map((e) => (e == jd ? 0 : e))
  let uxx = parseInt(ux.join(''))
  let unn = parseInt(un.join(''))
  // console.log({ uxx, unn })
  return uxx - unn
}
console.log()
console.log('abc', minMaxDifference(90))
// console.log('abc', minMaxDifference(11891))
// console.log('abc', minMaxDifference(898))
//biweekly contest 98
