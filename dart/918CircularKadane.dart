class Solution {
  int maxSubarraySumCircular(List<int> nums) {
      int s = 0, mx = nums[0], mn = nums[0],cmx=0,cmn =0;
      for(int n in nums){
          s+=n;
          cmx=max(cmx+n,n);mx=max(mx,cmx);
          cmn=min(cmn+n,n);mn=min(mn,cmn);
      }
      return mx < 0 ? mx : max(mx,s-mn);
  }
}