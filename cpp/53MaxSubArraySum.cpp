class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int c = 0;
        int ans = INT_MIN;
        for(auto a:nums){
            c+=a;
            ans = max(ans,c);
            if(c < 0) c = 0;
        }
        return ans;
    }
};
// https://www.youtube.com/watch?v=GJOCyFMiFTE