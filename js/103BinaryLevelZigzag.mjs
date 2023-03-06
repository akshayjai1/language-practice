/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let q = root ? [root] : []
  let res = []
  while (q.length) {
    let s = []
    let nl = q.length
    while (nl-- > 0) {
      let n = q.shift()
      s.push(n.val)
      if (n.left) {
        q.push(n.left)
      }
      if (n.right) {
        q.push(n.right)
      }
    }
    if (res.length % 2 == 0) {
      res.push(s)
    } else {
      res.push(s.reverse())
    }
  }
  return res
}
