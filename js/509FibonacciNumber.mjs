/* in fibonacci number, the value depends of sum of previous two fibonacci number, therefore, we do not want to recalculate fibonacci numbers again and again,
so we are keeping a map

and we keep on calculating fibonacci number from 1 to the required number by addition.
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let m = { 0: 0, 1: 1 }
  let i = 2
  while (i <= n) {
    m[i] = m[i - 1] + m[i - 2]
    i++
  }
  return m[n]
}
console.log('fibo of ', fib(6))
