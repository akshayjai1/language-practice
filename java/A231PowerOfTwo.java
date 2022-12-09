public class A231PowerOfTwo {
	class Solution {
    public boolean isPowerOfTwo(int n) {
        return (n > 0) && (n==1 || (n%2==0 && isPowerOfTwo(n/2)));
    }
	}
}
// https://leetcode.com/problems/power-of-two/discuss/63966/4-different-ways-to-solve-Iterative-Recursive-Bit-operation-Math
// https://leetcode.com/problems/power-of-two/discuss/1638707/PythonC%2B%2BJava-Detailly-Explain-Why-n-and-n-1-Works-oror-1-Line-oror-100-Faster-oror-Easy