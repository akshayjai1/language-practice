class Solution {
    fun subarraysDivByK(nums: IntArray, k: Int): Int {
        val map = hashMapOf(0 to 1)
        var count = 0; var sum = 0
        for(n in nums){
            sum+=n
            var mod = sum % k
            if (mod < 0) mod+=k
            if (map.contains(mod))
                count += map[mod]!!
            map[mod] = (map[mod] ?: 0) + 1;
        }
        return count;
    }
}