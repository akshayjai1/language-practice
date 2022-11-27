public class SmallestEvenMultiple2413 {
	class Solution {
		public int smallestEvenMultiple(int n) {
        return n << (n & 1);
    }
	}
}

class Solution {
	public int smallestEvenMultiple(int n) {
			return n % 2 == 0 ? n : n * 2;
	}
}