public class Solution {

	public static boolean checkMember(int n){
		int a = 0, b = 1, c = 1;
		if(n == 0 || n == 1) return true;
		while(c < n){
			c = a + b;
			a = b;b = c;
		}
		return n == c;
	}
}
