/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  if (n < 3) return 1
  let m = {}
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 1) {
        m[i] = m[i] ?? []
        m[i].push(j)
      }
    }
  }
  let s = new Set([n])
  let consideredSet = new Set()
  // let o = 0;
  //     let x = [m[n]];
  //     while(o < x.length){
  //         o++;

  //     }
  // console.log('this is map', m)
  let q = [n]
  while (q.length > 0) {
    let p = q.shift()
    if (consideredSet.has(p) || p < 3) continue
    consideredSet.add(p)
    m[p].forEach((e) => s.add(e))
    q.push(...m[p])
    // console.log(`pushed ${m[p]} to ${q}`)
  }
  return s.size
}
console.log()
console.log(distinctIntegers(3))
console.log()
