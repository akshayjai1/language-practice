/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0,
    found = false
  console.log('hi')
  for (let i = s.length - 1; i > -1; i--) {
    console.log('s[i] - ', s[i])
    if (s[i] == ' ') {
      if (found) return count
      continue
    } else {
      found = true
      count += 1
    }
  }
  return count
}
console.log('count is ', lengthOfLastWord('he Wor'))
