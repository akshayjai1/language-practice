/* instead of moving through columns of first row, let us move through rows of first column, and if we find that rowNumber + 1< totalRows and row[rowNumber + 1] < row[rowNumber], increment the count and break from loop*/
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let cols = strs[0].length
  let count = 0
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i + 1 < strs.length; i++) {
      if (strs[i][j] > strs[i + 1][j]) {
        lexical = false
        break
      }
    }
  }
  return count
}
let a = ['cba', 'daf', 'ghi']
let m = [a]
console.log('sol', minDeletionSize(a))
