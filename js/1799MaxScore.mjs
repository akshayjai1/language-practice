/**
 * @param {number[]} nums
 * @return {number}
 */
let count = 0
var maxScore = function (nums) {
  let m = new Map()
  function dfs(mask, op) {
    console.log('\n--------function count = ', ++count)
    console.log(`mask is ${mask}`)
    if (m.has(mask)) {
      const value = m.get(mask)
      console.log(`[CACHE] ==> returning ${value} for mask = ${mask}`)
      return value
    }
    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) {
        console.log(`continue for i = ${i}`)
        continue
      }
      for (let j = i + 1; j < nums.length; j++) {
        if (mask & (1 << j)) {
          console.log(`continue for j = ${i}`)
          continue
        }
        let newMask = mask | (1 << i) | (1 << j)
        console.log(`old mask = ${mask} and new mask = ${newMask}`)
        let score = op * gcd(nums[i], nums[j])
        console.log(
          `score for op = ${op} is ${score} and numbers were ${nums[i]},${nums[j]}`,
        )
        let maskScore = score + dfs(newMask, op + 1)
        maskScore = Math.max(maskScore, m.get(mask) || 0)
        m.set(mask, maskScore || 0)
        // m.set(mask, Math.max(m.get(mask), score + dfs(newMask, op + 1)))
      }
    }
    console.log(
      `\nreturn value for op = ${op} and mask = ${mask} is ${m.get(mask) || 0}`,
    )
    return m.get(mask) ?? 0
  }
  return dfs(0, 1)
}
console.log('max score is ', maxScore([3, 4, 6, 8]))

function gcd(big, small) {
  if (big < small) {
    let t = small
    small = big
    big = t
  }
  if (small === 0) return big
  let rem = big % small
  while (rem != 0) {
    big = small
    small = rem
    rem = big % small
  }
  return small
}
