const MODULUS = 10 ** 9 + 7

function numberOfArrays(s, k) {
    const memo= []
    const dp = (index) => {
        if(index == s.length) return 1
        if(s[index] == '0') return 0

        if(memo[index] != undefined) return memo[index]
        let ways = 0
        for(let i = index+1; i <= s.length; i++){
            if(Number(s.substring(index, i)) <= k){
                ways += dp(i)
            }else{
                break
            }
        }
        memo[index] = ways % MODULUS
        return memo[index]
    }
    return dp(0)
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArray = function (s, k) {
  let memo = [],
    mod = 10 ** 9 + 7
  function dp(index) {
    if (index === s.length) return 1
    if (s[index] === '0') {
      return 0
    }
    if (memo[index] !== undefined) return memo[index]
    let ways = 0
    for (let i = index + 1; i < s.length; i++) {
      if (Number(s.substring(index, i)) <= k) {
        ways += dp(i)
      } else {
        break
      }
    }
    memo[index] = ways % mod
    return memo[index]
  }
  return dp(0)
}
