/*
we will use three pointers i,j,k,
i points to start of char, j also points same, but keeps on increasing till chars[i] == chars[j]
k is used to update chars array.
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0,
    j = 0,
    k = 0
  while (j < chars.length) {
    while (chars[i] === chars[j]) {
      j++
    }
    chars[k++] = chars[i]
    let dif = j - i
    if (dif > 9) {
      let u = dif + ''
      let us = u.split('')
      let l = 0
      while (l < us.length) {
        chars[k++] = us[l++]
      }
    } else if (j - i > 1) {
      chars[k++] = j - i + ''
    }
    i = j
  }
  console.log('chars is ', chars)
  return k
}
console.log()
let c = compress([
  'a',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
])
// let c = compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])
console.log('compresss sting ans = ', c)
