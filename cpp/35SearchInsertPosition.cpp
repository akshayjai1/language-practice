class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int l = 0, h = nums.size() - 1;
        while(l < h){
            int m = l + (h - l)/2;
            if(target > nums[m]){
                l = m + 1;
            } else {
                h = m;
            }
        }
        return target > nums[l] ? l + 1: l ;
    }
};
/* it is a simple binary search, but just in case, the item has to be inserted into extreme end, we return l + 1 */