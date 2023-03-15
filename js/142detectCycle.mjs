/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null
  let a = [head]
  while (head.next) {
    if (a.includes(head.next)) {
      return head.next
    } else {
      a.push(head.next)
    }
    head = head.next
  }
  return null
}
