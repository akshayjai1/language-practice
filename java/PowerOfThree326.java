public class PowerOfThree326 {
	class Solution {
		public boolean isPowerOfThree(int n) {
			if (n == 0)
				return false;
			if (n == 1)
				return true;
			// for(int i = 1; 3*i<= n; i=i*3){
			//     if(3*i == n){
			//         return true;
			//     }
			// }
			// return false;
			if (n % 3 == 0) {
				return isPowerOfThree(n / 3);
			}
			return false;
		}
	}
}

// https://leetcode.com/problems/power-of-three/discuss/77876/**-A-summary-of-all-solutions-(new-method-included-at-15%3A30pm-Jan-8th)
