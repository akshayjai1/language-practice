// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/?envType=study-plan&id=programming-skills-i

class Solution {
    func canMakeArithmeticProgression(_ arr: [Int]) -> Bool {
        let a = arr.sorted()
        let d = a[1] - a[0]
        for i in 2..<a.count {
            if a[i] - a[i-1] != d {
                return false
            }
        }
        return true
    }
}