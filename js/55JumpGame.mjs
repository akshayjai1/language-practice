/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0
  let current = 0
  while (current <= maxReach) {
    maxReach = Math.max(current + nums[current], maxReach)
    current++
    if (maxReach >= nums.length - 1) return true
  }
  return false
}
let x =
  'hello my name is khan  sd   sdf    ss academy, we  are    on a mission to transform education. Thank you for joining us!'
function extractLongWordsReversed(text) {
  const result = text
    .split(' ')
    .filter((e) => e.length > 5)
    .reverse()
    .join(', ')
    .toLocaleLowerCase()
  return result
}
// console.log('\n', getLongWordsInString(x))

// let v = [1, 2, 3, 45, 6, 7, 7, 89, 0, 2]
// console.log('\t v = ', v.slice(0, -2))

function doStuff(text) {
  const lowerCased = text.toLocaleLowerCase()
  const words = lowerCased.split(' ')
  words.reverse()

  const trimmedWords = []
  for (let i in words) {
    trimmedWords.push(words[i].trim())
  }

  const longWords = []
  for (let i in trimmedWords) {
    if (trimmedWords[i].length > 5) {
      longWords.push(trimmedWords[i])
    }
  }

  let result = ''
  for (let i in longWords) {
    result += longWords[i]
    result += ', '
  }
  console.log('function do stuff', result.slice(0, -2))
  return result.slice(0, -2)
}

console.log(
  'matching output of function',
  doStuff(x) === extractLongWordsReversed(x),
)
