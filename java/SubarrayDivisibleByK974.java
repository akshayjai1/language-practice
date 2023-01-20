// https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/217980/java-o-n-with-hashmap-and-prefix-sum/
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int count = 0;
        int sum = 0;
        Map<Integer, Integer> hm = new HashMap<>();
        hm.put(0,1);
        for(int n: nums){
            sum = (sum + n) % k;
            if(sum < 0) sum+=k; // -1 % 5 is -1, we need 4;
            count+=hm.getOrDefault(sum,0);
            hm.put(sum, hm.getOrDefault(sum,0)+1);
        }
        return count;
    }
}