class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int arraySum = 0; // sum that is to be returned
        int straightMaxSum = INT_MIN; // current sum
        int straightMinSum = INT_MAX; // no of elements
        int tempMaxSum = 0;
        int tempMinSum = 0;
        for(int i = 0 ; i < nums.size(); i++){
            arraySum+=nums[i];

            tempMaxSum+=nums[i];
            straightMaxSum = max(tempMaxSum, straightMaxSum);
            tempMaxSum = tempMaxSum < 0 ? 0 : tempMaxSum;

            tempMinSum+=nums[i];
            straightMinSum = min(tempMinSum, straightMinSum);
            tempMinSum = tempMinSum > 0 ? 0 : tempMinSum;
        }
        if(arraySum == straightMinSum) return straightMaxSum;
        return max(straightMaxSum, arraySum - straightMinSum);
    }
};
// https://www.youtube.com/watch?v=Q1TYVUEr-wY techdose, algorithm made easy
/* short version */
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int s = 0;int mx = INT_MIN; int mn = INT_MAX; int cmx=0;int cmn = 0;
        for(auto &a:nums){
            s+=a;
            cmx=max(a,cmx+a);mx=max(mx,cmx);
            cmn=min(cmn+a,a);mn=min(mn,cmn);
        }
        if(mx<0) return mx;
        return max(mx,s-mn);
    }
};

