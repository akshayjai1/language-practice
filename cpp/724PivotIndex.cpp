class Solution {
public:
    int pivotIndex(vector<int>& nums) {
      int n = nums.size();
      vector<int> l, r;
      int s = 0;
      int currentLeftSum = 0;
      for(auto x:nums){
          s+=x;
          l.push_back(currentLeftSum);
          currentLeftSum+=x;
          r.push_back(-currentLeftSum);
      }
      for(int i = 0; i< n; i++){
          if(l[i]==(r[i]+s))
            return i;
      }
      return -1;
    }
};