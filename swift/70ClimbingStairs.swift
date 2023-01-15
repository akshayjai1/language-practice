// https://leetcode.com/problems/climbing-stairs/solutions/2383701/fastest-solution-explained-0ms-100-o-n-time-complexity-o-n-space-complexity/
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of steps.
    //   - space: O(1), only constant space is used.

    func climbStairs(_ n: Int) -> Int {
        if n == 0 || n == 1 { return 1 }

        var first = 1
        var second = 1
        var third = 0

        for _ in 2...n {
            third = first + second
            first = second
            second = third
        }

        return second
    }

}