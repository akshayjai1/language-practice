var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
    } else {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1; // leetcode expects i+1
  // return nums.slice(0,i+1);
};
var a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(a));

/* idea is to keep nonDuplicateItem index initialized at zero and when we find that arr[1] is not a duplicate, make nonDuplicateItemIndex = 1,
  if [2] is not a duplicate, make nonDuplicateItemIndex = 2,
  if [3] is a duplicate, keep nonDuplicateItemIndex = 2,
  return nonDuplicateItemIndex+1 (since we are returning total number of non-duplicates and we had started from index 0)

*/
