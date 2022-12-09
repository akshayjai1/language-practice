class MedianFinder {
  constructor() {
    this.left = new MaxPriorityQueue();
    this.right = new MinPriorityQueue();
  }
  addNum(n) {
    if (n > this.left.front()?.element) this.right.enqueue(n);
    else this.left.enqueue(n);

    if (this.left.size() === this.right.size() + 2)
      this.right.enqueue(this.left.dequeue().element);
    if (this.left.size() + 2 === this.right.size())
      this.left.enqueue(this.right.dequeue().element);
  }
  findMedian() {
    const left = this.left.front().element;
    if (this.left.size() > this.right.size()) return left;
    const right = this.right.front().element;
    if (this.right.size() > this.left.size()) return right;
    return (left + right) / 2;
  }
}
