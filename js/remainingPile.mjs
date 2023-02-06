// weekly contest 331
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  gifts.sort((a, b) => a - b)
  let rem = [gifts.pop()]
  for (let i = 0; i < k; i++) {
    // if(rem.length + gifts.length ==)
    rem.sort((a, b) => a - b)
    let r = rem[rem.length - 1]
    let g = gifts.length > 0 ? gifts[gifts.length - 1] : -Infinity
    let s
    if (r > g) {
      s = rem.pop()
    } else {
      s = gifts.pop()
    }
    let d = Math.floor(Math.sqrt(s))
    rem.push(d)
  }
  let sg = gifts.reduce((a, c) => a + c, 0)
  let sr = rem.reduce((a, c) => a + c, 0)
  return sg + sr
}
