class Solution {
  int searchInsert(List<int> nums, int target) {
      int l = 0, h = nums.length;
      while(l < h){
          int m = l + (h - l) ~/2;
          if(target > nums[m]){
              l = m + 1;
          } else {
              h = m;
          }
      }
      return l;
  }
}