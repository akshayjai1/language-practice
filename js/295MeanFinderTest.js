var MedianFinder = function () {
  this.heap = [];
  this.push = function (n) {
    this.heap.push(n);
    this.bubbleUp(this.heap.length - 1);
  };
  this.pop = function () {
    let toReturn = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return toReturn;
  };

  this.bubbleUp = function (i) {
    const current = this.heap[i];
    while (i > 0) {
      let parent = Math.floor((i + 1) / 2) - 1;
      if (this.heap[parent] < current) {
        break;
      }
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  };
  this.bubbleDown = function (i) {
    const current = this.heap[i];
    while (true) {
      let right = (i + 1) * 2;
      let left = right - 1;
      let smallest = i;
      if (current > this.heap[left]) {
        smallest = left;
        if (this.heap[left] > this.heap[right]) {
          smallest = right;
        }
      }
      if (i === smallest && current > this.heap[right]) {
        smallest = right;
      }
      if (i === smallest) {
        break;
      }
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  };
  this.size = function () {
    return this.heap.length;
  };
  this.top = function () {
    return this.heap[0];
  };
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
