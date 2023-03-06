// 6362 weekly contest 333
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let n = []
  let a = nums1.shift(),
    b = nums2.shift()
  let i = 0
  while (a || b || nums1.length + nums2.length > 0) {
    a = a ? a : nums1.shift()
    b = b ? b : nums2.shift()
    console.log(++i, a, b, n)
    if (a && b) {
      if (a[0] < b[0]) {
        n.push(a)
        a = null
      } else if (b[0] < a[0]) {
        n.push(b)
        b = null
      } else {
        n.push([a[0], a[1] + b[1]])
        b = a = null
      }
    } else if (a) {
      n.push(a)
      a = null
    } else if (b) {
      n.push(b)
      b = null
    }
  }
  return n
}

console.log()
// console.log(
//   mergeArrays(
//     [
//       [2, 4],
//       [3, 6],
//       [5, 5],
//     ],
//     [
//       [1, 3],
//       [4, 3],
//     ],
//   ),
// )

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
  ),
)
