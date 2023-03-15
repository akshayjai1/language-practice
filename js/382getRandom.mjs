/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.a = []
  let c = head
  while (c != null) {
    this.a.push(c)
    c = c.next
  }
  this.length = this.a.length
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let i = Math.floor(Math.random() * this.length)
  return this.a[i].val
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 * https://leetcode.com/problems/linked-list-random-node/solutions/1671967/2-ways-java-c-python-javascript-easy-for-mind-to-accept-it/
 * https://leetcode.com/problems/linked-list-random-node/solutions/957646/javascript-fixed-range-time-o-n-space-o-n/
 * https://www.youtube.com/watch?v=Rl7dOXde_2s
 * what is reservoir sampling
 */
