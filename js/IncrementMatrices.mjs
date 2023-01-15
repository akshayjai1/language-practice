var rangeAddQueries = function (n, queries) {
  let x = Array(n)
    .fill(0)
    .map((e) => Array(n).fill(0))
  for (let i = 0; i < queries.length; i++) {
    const [r, c, re, ce] = queries[i].map((e) => parseInt(e))
    debugger
    for (let a = r; a <= re; a++) {
      for (let b = c; b <= ce; b++) {
        x[a][b] += 1
      }
    }
  }
  return x
}

console.log()
console.log()
console.log('-- solution')
console.log(
  rangeAddQueries(3, [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ]),
)
console.log()
