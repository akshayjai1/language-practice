/**
 * @param {string} s
 * @return {string[]}
 */
const MAX_DOTS = 4
var restoreIpAddresses = function (s) {
  const ips = []
  function isValidSub(s) {
    if (s.length > 1 && s[0] == '0') return false
    return parseInt(s) < 256
  }
  if (s.length > 12) return ips
  function backtrack(start, dots, ip /* , fId */) {
    /* ip is the current ip string we have, if it is valid, we will put it in ips,
        dots is the total number of dots we have already added, first dot is added after a digit
        start is the index where we start considering digit*/
    /* since we want to go till 3 digits, i, i+1, i+2 */
    if (dots > MAX_DOTS) return
    if (dots === MAX_DOTS && start == s.length) {
      ips.push(ip.substring(0, ip.length - 1))
      return
    }
    for (let i = start; i < Math.min(start + 3, s.length); i++) {
      const sub = s.substring(start, i + 1)
      if (isValidSub(sub)) {
        // if ((s[start] != '0' || i == start) && parseInt(sub) < 256) {
        // const v = `selected sub for ${fId} = ${sub}`
        // if (ma[fId]) {
        //   ma[fId].push(v)
        // } else {
        //   ma[fId] = [v]
        // }
        // console.log(v, sub)
        const newIp = ip + sub + '.'
        backtrack(i + 1, dots + 1, newIp, fId + 1)
      }
    }
  }
  backtrack(0, 0, '')
  return ips
}

console.log('\n ', restoreIpAddresses('101023'), '\n')
// console.log('\n ', restoreIpAddresses('25525511135'), '\n')
