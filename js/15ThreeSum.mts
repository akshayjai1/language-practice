/*
0. if the length of nums is less than 3 return empty array.
1. sort the array
2. for i : iterate till length - 2
2.1 if the ith element is a positive one, then further elements cannot add up to zero, so we end.
2.2 if there is duplicate element, then we want to skip ahead, as we want unique triplets
2.3 now that we have a number = nums[i], we want to find another two numbers, which add up to cancel, current nums[i]
2.4 Now we use a 2 pointer approach to find those two numbers
3. j = i + 1, k = length - 1
3.1 again check for duplicate and skip ahead
3.2 if nums[i] + nums[j] > 0, then we can't have nums[k], cancel it, so we skip ahead
3.3 now we check for 3 conditions
4.1 if nums[j] + nums[k] > - nums[i] ===> k--
4.2 if nums[j] + nums[k] > - nums[i] ===> j++
4.3 if nums[j] + nums[k] == - nums[i] ==> we found the triplet, add it to triplet set, j++,k--

5. return triplet set
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  const result: any[][] = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] + nums[i - 1] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        j++
        continue
      }
      if (nums[i] + nums[j] > 0) break
      if (nums[j] + nums[k] > -nums[i]) k--
      if (nums[j] + nums[k] < -nums[i]) j++
      if (nums[j] + nums[k] === -nums[i]) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
      }
    }
  }
  return result
}
let a = [-1, -1, 2]
console.log('solution', threeSum(a))

// typescript solution
/*
0. if length of nums is less than 3, return []
1. sort the nums
2. iterate using i till .length - 2
2.1 if nums[i] > 0, break; it is not possible to find a triplet summing to 0
2.2 if there is a duplicate, we continue ahead with next i
2.3 now we have nums[i], we want to find two numbers in rest of array that add up to cancel nums[i]
3. use two pointer approach to find two numbers that can cancel nums[i]
3. j = i + 1, k = .length - 1
3.1 if nums[i] + nums[j] > 0, then we cant have k, which can cancel, therefore break;
3.2 if there is duplicate in j, move ahead by incrementing j
4. Now check for three conditions,
4.1 if -nums[i] > nums[j] + nums[k] ==> j++; continue;
4.1 if -nums[i] < nums[j] + nums[k] ==> k-- continue;
4.1 if -nums[i] == nums[j] + nums[k] ==> { result.push(triplet); j++;k--;}

5. return triplet set
 */

function threeSum1(nums: number[]): number[][] {
  const result: number[][] = []
  if (nums.length < 3) return result
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        j++
        continue
      }
      if (nums[i] + nums[j] > 0) {
        break
      }
      if (-nums[i] > nums[j] + nums[k]) {
        j++
        continue
      } else if (-nums[i] < nums[j] + nums[k]) {
        k--
        continue
      } else if (-nums[i] == nums[j] + nums[k]) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
      }
    }
  }
  return result
}
