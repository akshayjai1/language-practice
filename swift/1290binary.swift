/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func getDecimalValue(_ head: ListNode?) -> Int {
        var r:Int = 0
        var node:ListNode? = head
        while node != nil {
            r = 2 * r + node!.val
            node = node?.next
        }
        return r
    }
}
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/2016347/sss-simple-swift-solutions-2-solutions/