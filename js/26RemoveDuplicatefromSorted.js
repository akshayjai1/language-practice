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
