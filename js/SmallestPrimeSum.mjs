/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  function getTwoFactorOnePrime(n) {
    if (n == 2) return [2]
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return [i, n / i]
      }
    }
    return [n]
  }
  function getPrimeArray(n) {
    var m = []
    var c = getTwoFactorOnePrime(n)
    // console.log('two factor for c',c);
    while (c.length === 2) {
      const last = c.pop()
      m.push(c.pop())
      c = getTwoFactorOnePrime(last)
    }
    if (c.length === 1) m.push(c[0])
    return m
  }
  function ss(n) {
    // console.log('in',n);
    let ar = getPrimeArray(n)
    // console.log('ar',ar);
    while (ar.length > 1) {
      // console.log('ar is',ar);
      const s = ar.reduce((a, c) => a + c, 0)
      // console.log('sum is',s);
      if (s === 4) return 4
      ar = getPrimeArray(s)
    }
    return ar[0]
  }
  return ss(n)
}
