public class A1920BuildArrayFromPermutation {
	class Solution {
		public int[] buildArray(int[] nums) {
			for (int i = 0; i < nums.length; i++) {
				int r = nums[i];
				int b = nums[nums[i]] % nums.length;
				nums[i] = b * nums.length + r;
			}
			for (int i = 0; i < nums.length; i++) {
				nums[i] = nums[i] / nums.length;
			}
			return nums;
		}
	}
}
//https://leetcode.com/problems/build-array-from-permutation/discuss/1315926/Python-O(n)-Time-O(1)-Space-w-Full-Explanation
