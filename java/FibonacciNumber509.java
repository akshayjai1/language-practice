// https://leetcode.com/problems/fibonacci-number/discuss/215992/Java-Solutions
class FibonacciNumber509 {
	public int fib(int n) {
			int[] sa = new int[31];
			return getFib(n,sa);
	}
	public int getFib(int n, int [] sa){
			if(sa[n] != 0){
					return sa[n];
			} else {
					if(n == 0 || n == 1){
							sa[n] = n;
							return n;
					} else {
							sa[n] = getFib(n - 1, sa) + getFib( n - 2, sa);
							return sa[n];
					}
			}

	}
}
