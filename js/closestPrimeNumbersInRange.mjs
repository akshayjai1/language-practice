/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimesTLE = function (left, right) {
  const r = Math.floor(Math.sqrt(right))
  const a = new Array(right - left + 1)
  for (let j = 2; j <= r; j++) {
    let i = left
    while (i <= right) {
      if (i % j === 0) {
        a[i - left] = true
      }
      i++
    }
  }
  // console.log('mark array is', a)
  let p = []
  for (let i = 0; i < a.length; i++) {
    if (!a[i]) {
      p.push(left + i)
    }
  }
  // console.log('primes are', p)
  if (p.length < 2) {
    return [-1, -1]
  } else if (p.length === 1) {
    return [-1, -1]
  }
  let differences = []
  for (let i = 1; i < p.length; i++) {
    differences.push(p[i] - p[i - 1])
  }
  // console.log('difference is ', differences)
  let min = Math.min(...differences)
  let di = differences.indexOf(min)
  // console.log('di is', di)
  return [p[di], p[di + 1]]
}

console.log('the primes are ', closestPrimes(10, 19))

var closestPrimes = function (left, right) {
  const a = new Array(right + 1).fill(true)
  function fillPrimes(n) {
    a[0] = false
    a[1] = false
    //   1 : get square root
    const sq = Math.floor(Math.sqrt(n))
    for (let j = 2; j <= sq; j++) {
      if (a[j]) {
        //   2 mark all multiples as not prime
        for (let i = j * j; i < n; i += j) {
          a[i] = false
        }
      }
    }
  }
  fillPrimes(right + 1)
  let diff = Infinity,
    n1 = -1,
    n2 = -1,
    prev = -1
  for (let i = left; i <= right; i++) {
    if (a[i]) {
      if (prev === -1) {
        prev = i
      } else {
        if (i - prev < diff) {
          diff = i - prev
          n1 = prev
          n2 = i
          if (diff < 3) break
        }
        prev = i
      }
    }
  }
  return [n1, n2]
}
