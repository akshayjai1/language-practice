class Solution {
public:
    int jump(vector<int>& nums) {
        int farthest = 0;
      int currentFarthest = 0;
      int jumps = 0;
      for(int i = 0 ; i < nums.size() - 1; i++){
        farthest = max(farthest, nums[i] + i);
        if(i == currentFarthest){
          currentFarthest = farthest;
          jumps++;
        }
      }
      return jumps;
    }
};
// code with alisha
// // [2,3,1,1,4]
// iteration jumps farthest currentFarthest nums[i]
// 0         0       0         0              null
// start
// 0         1       2         2              2
// 1                 4                        3
// 2         1  max(4,1+2)=4   4              1
// 3                4,1+3 = 4  false          1
// 4                4,4+4 = 8                          4
