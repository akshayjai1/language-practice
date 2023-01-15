class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> mp;
        int sum = 0;
        int n = nums.size();
        int count = 0;
        mp[0] = 1;
        for(int i = 0; i < n; i++){
            sum+=nums[i];
            if(mp.find(sum - k) != mp.end()){
                count+= mp[sum - k];
            }
            if(mp.find(sum)!=mp.end()){
                mp[sum] = mp[sum] + 1;
            } else {
                mp[sum] = 1;
            }
        }
        return count;
    }
};