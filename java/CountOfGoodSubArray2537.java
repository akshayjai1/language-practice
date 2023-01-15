class Solution {
    public long countGood(int[] nums, int k) {
       Map<Integer,Integer> mp = new HashMap<>();
       long pairs = 0;
       long ans = 0;
       int l = 0;
       for(int i = 0; i < nums.length; i++){
           mp.put(nums[i],mp.getOrDefault(nums[i],0) + 1);
            pairs += (mp.get(nums[i]) - 1);
            if(pairs >= k){
                while(l <= i && pairs >= k){
                    ans += nums.length - i;
                    mp.put(nums[l], mp.get(nums[l]) - 1);
                    pairs -= mp.get(nums[l]);
                    if(mp.get(nums[l]) == 0){
                        mp.remove(nums[l]);
                    }
                    l++;
                }
            }
       }
       return ans;
    }
}
// solution from bro_coders