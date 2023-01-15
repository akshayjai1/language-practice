class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        Map<Integer,Integer> mp = new HashMap<>();
        mp.put(0,-1);
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum+=nums[i];
            int rem = sum % k;
            if(mp.containsKey(rem)){
                if(i - mp.get(rem) > 1){
                    return true;
                }
            } else {
                mp.put(rem,i);
            }

        }
        return false;
    }
}
// https://leetcode.com/problems/continuous-subarray-sum/solutions/3053952/if-you-get-same-remainder-again-then-subarray-sum-is-multiple-of-k/