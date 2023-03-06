function divisibilityArray(word, m) {
  return word.split('').map((w, i) => {
    return isDivisibleByM(word.substring(0, i + 1), m)
  })
}
function isDivisibleByM(s, m) {
  // let sum = s.split("").reduce((a, c) => a + parseInt(c), 0);
  // return sum % 3 === 0;
  let a = parseInt(s)
  return a % m === 0 ? 1 : 0
}

console.log()
let rs = divisibilityArray('998244353', 3)
console.log('ans = ', rs)
console.log('ans match = ', rs.join('') == [1, 1, 0, 0, 0, 1, 1, 0, 0].join(''))
