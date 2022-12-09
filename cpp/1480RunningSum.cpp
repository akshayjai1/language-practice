class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> sum;
        int currentSum = 0;
        for(auto x:nums){
            currentSum+=x;
            sum.push_back(currentSum);
        }
        return sum;
    }
};