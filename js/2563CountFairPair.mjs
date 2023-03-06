var integerSortAsc = (a, b) => parseInt(a) - parseInt(b)
var countFairPairs = function (nums, lower, upper) {
  let m = {}
  // for (let i in nums) {
  //   let x = nums[i]
  //   if (m[x]) {
  //     m[x].push(i)
  //   } else {
  //     m[x] = [i]
  //   }
  // }
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i]
    if (m[x]) {
      m[x].push(i)
    } else {
      m[x] = [i]
    }
  }

  console.log('initial map is', m)
  for (let z in m) {
    m[z].sort(integerSortAsc).forEach((e, i) => {
      m[z][i] = parseInt(m[z][i])
    })
  }
  let k = Object.keys(m)
    .map((e) => parseInt(e))
    .sort(integerSortAsc)
  console.log('keys', k)
  console.log('map is ', m)
  let count = 0
  if (k.length === 1 && inBound(parseInt(k[0]), lower, upper)) {
    console.log(typeof k[0], k[0])
    count += nc2(m[k[0]].length)
  }
  for (let j = 0; j < k.length - 1; j++) {
    for (let l = j + 1; l < k.length; l++) {
      let s = k[j] + k[l]
      if (inBound(s, lower, upper)) {
        // if (s >= lower && s <= upper) {
        console.log('sum is', s, k[j], j, k[l], l)
        // now we can create pairs of their indices.
        let firstIndices = m[k[j]]
        let secondIndices = m[k[l]]
        // let fl = firstIndices.length, sl = secondIndices.length;
        // if((fl+sl) === 1) {
        // 	if(fl === 1) {

        // 	}
        // }
        count += possibleCombinationCount(firstIndices, secondIndices)
      }
    }
  }
  return count
}
/* x and y are sorted array of integers , we have to create combination(i,j) such that i < j, and i comes from x, j comes from y*/
function possibleCombinationCount(x, y) {
  console.log('x and y = ', x, y)
  let combs = []
  for (let a of x) {
    for (let i = y.length - 1; i > -1; i--) {
      let b = y[i]
      if (a < b) {
        combs.push([a, b])
      } else {
        combs.push([b, a])
      }
    }
  }
  console.log('comb = ', combs)
  return combs.length
}

function nc2(n) {
  let p = (n * (n - 1)) / 2
  return p
}
function inBound(a, b, c) {
  return a >= b && a <= c
}

// https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174181/two-pointers-2/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var pairsLessEqual = function (nums, val) {
  let res = 0
  for (let i = 0, j = nums.length - 1; i < j; i++) {
    while (i < j && nums[i] + nums[j] > val) {
      j--
    }
    let count = j - i
    console.log('adding count', count)
    res += count
  }
  return res
}
var countFairPairs1 = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)
  console.log('nums is ', nums)
  let a = pairsLessEqual(nums, upper),
    b = pairsLessEqual(nums, lower - 1)
  console.log({ a, b })
  return a - b
}

console.log('-----------')
// console.log(countFairPairs())

console.log()
// console.log(countFairPairs([0, 0, 0, 0, 0, 0], 0, 0))
// console.log(countFairPairs1([1, 7, 9, 2, 5], 11, 11))
console.log(countFairPairs1([0, 1, 7, 4, 4, 5], 3, 6))
