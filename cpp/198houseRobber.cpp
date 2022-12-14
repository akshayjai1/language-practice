class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        int m = nums[0];
        int temp = 0;
        int temp2 = 0;
        for(int i = 1 ; i < n; i++){
            temp2 = m;
            m = max(m, nums[i] + temp);
            temp = temp2;
        }
        return m;
    }
};