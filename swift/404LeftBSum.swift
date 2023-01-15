/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    var leftSum = 0
    func sumOfLeftLeaves(_ root: TreeNode?) -> Int {
        leftSum(root,false)
        return leftSum
    }
    func leftSum (_ tn:TreeNode?, _ isLeft:Bool){
        if tn == nil {
            return
        }
        if isLeft && tn?.left == nil && tn?.right == nil {
            leftSum += tn!.val
        }
        leftSum(tn!.left, true)
        leftSum(tn!.right, false)


    }
}
// https://leetcode.com/problems/sum-of-left-leaves/solutions/809261/swift-solution-dfs/