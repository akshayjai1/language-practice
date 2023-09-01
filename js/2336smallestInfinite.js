var SmallestInfiniteSet = function () {
  this.cur = 1
  this.setS = new Set()
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.setS.size > 0) {
    let mi = Math.min(...this.setS)
    this.setS.delete(mi)
    return mi
  } else {
    this.cur++
    return this.cur - 1
  }
}

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num < this.cur) {
    this.setS.add(num)
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
var c = new SmallestInfiniteSet()
console.log(c.addBack(1))
console.log(c.popSmallest())
console.log(c.popSmallest())
console.log(c.popSmallest())
console.log(c.addBack(1))
console.log(c.popSmallest())
