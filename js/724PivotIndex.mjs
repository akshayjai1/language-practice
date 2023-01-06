/*
as we iterate from start to finish on the array.
we keep two sum array variables 1. left sum = 0 2. right sum = 0
now we populate both array variables, left sum we start populating from left
right sum we start populating from right

Now in independent iteration. we check for all value of i, if. there is a value of i, where rightSum == left sum , then we return i;
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const leftSumArr = [0],
    rightSumArr = [0]
  let leftSum = 0,
    rightSum = 0
  for (let i = 1, j = nums.length - 2; i < nums.length; i++, j--) {
    leftSum += nums[i - 1]
    leftSumArr.push(leftSum)
    rightSum += nums[j + 1]
    rightSumArr.unshift(rightSum)
  }
  console.log('left sum array is ', leftSumArr)
  console.log('right sum array is ', rightSumArr)
  for (let i = 0; i < nums.length; i++) {
    if (leftSumArr[i] === rightSumArr[i]) {
      return i
    }
  }
  return -1
}
let a = [1, 7, 3, 6, 5, 6]
console.log('the pivot index is', pivotIndex(a))
//  another solution

// # !12-Oct-22  07:10 AM Wednesday! # 1
// js
// https://leetcode.com/problems/find-pivot-index/submissions/
let n = [-1, -1, 0, 1, 1, -1]
// let n = [-1, -1, 0, 1, 1, -1];
// let n = [1,7,3,6,5,6];
// let n = [1,2,3];
// let n = [-1,-1,-1,-1,-1,0]
const runningSum = (x, reverse) => {
  let s = 0
  let a = []
  if (reverse) {
    for (let i = x.length - 1; i > -1; i--) {
      a[i] = s
      s += x[i]
    }
    return a
  }
  for (let m = 0; m < x.length; m++) {
    a[m] = s
    s += x[m]
  }
  return a
}

var pivotIndex1 = function (nums) {
  const sumArray = runningSum(nums, false)
  const reverseSumArray = runningSum(nums, true)

  for (let i = 0; i < nums.length; i++) {
    if (sumArray[i] === reverseSumArray[i]) {
      console.log('sum is ', sumArray[i], i)
      return i
    }
  }
  if (reverseSumArray[0] === 0) {
    return 0
    // left sum = 0;
  } else if (sumArray[sumArray.length - 1] === 0) {
    return sumArray.length - 1
    // right sum = 0;
  }
  return -1
}
console.log(runningSum(n, false))
console.log(runningSum(n, true))
console.log(pivotIndex(n))
