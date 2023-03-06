/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let m = {},
    left = 0,
    result = 0,
    total = 0
  for (let f of fruits) {
    m[f] = (m[f] ?? 0) + 1
    total += 1
    // console.log(m)
    while (Object.keys(m).length > 2) {
      let fr = fruits[left]
      m[fr] -= 1
      total -= 1
      if (m[fr] == 0) {
        // console.log('m before deleting', m)
        delete m[fr]
        // console.log('m after deleting', m)
      }
      left += 1
    }
    result = Math.max(result, total)
  }
  return result
}
var ab = [0, 1, 2, 2]
console.log('total fruit is \n', totalFruit(ab))
