class MedianFinder {
  constructor() {
    this.min = new Heap();
    this.max = new Heap();
  }

  addNum(num) {
		this.max.push(-num);
		console.log('1', this);
    this.min.push(-this.max.pop());
		console.log('2', this);
    if (this.max.size() < this.min.size()) {
			this.max.push(-this.min.pop());
			console.log('3', this);
    }
  }

  findMedian() {
    if (this.max.size() === this.min.size()) {
      return (-this.max.top() + this.min.top()) / 2;
    } else {
      return -this.max.top();
    }
  }
};

class Heap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    let toReturn = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return toReturn;
  }

  size() {
    return this.heap.length;
  }

  top() {
    return this.heap[0];
  }

  bubbleUp(idx) {
    let current = this.heap[idx];
    while (idx > 0) {
      let parent = Math.floor((idx + 1) / 2) - 1;
      let parentEl = this.heap[parent];
      if (parentEl < current) {
        break;
      }
      [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
      idx = parent;
    }
  }

  bubbleDown(idx) {
    let current = this.heap[idx];
    while (true) {
      let right = (idx + 1) * 2;
      let left = right - 1;
      let swap = null;
      let leftEl = this.heap[left];
      if (leftEl < current) {
        swap = left;
      }
      let rightEl = this.heap[right];
      if (rightEl < (swap ? this.heap[swap] : current)) {
        swap = right;
      }
      if (!swap) {
        break;
      }
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }
  }
}

a = new MedianFinder();
console.log('adding 1 ', a.addNum(1));
console.log('adding 2 ', a.addNum(2));
console.log('adding 3 ', a.findMedian());
console.log('adding 4 ', a.addNum(3));
console.log('adding 5 ', a.findMedian());
