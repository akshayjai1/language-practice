/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let j = 1
  let d = []
  for (let m = 0; m < arr.length && d.length < k; m++) {
    console.log('start of for loop ', m, ' ', arr[m])
    while (j < arr[m]) {
      d.push(j)
      console.log('pushed ', j)
      j++
      if (d.length === k) {
        return d.pop()
      }
    }
    j++
  }
  return k - d.length + j - 1
}
console.log()
// console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))
