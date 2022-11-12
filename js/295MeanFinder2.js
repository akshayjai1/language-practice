class MedianFinder {
	//Initilize max and min heap
    constructor() {
        this.minHeap = new MinPriorityQueue() //supported by leetcode
        this.maxHeap = new MaxPriorityQueue()
    }

    addNum(num) {
	//add to min and pop the top for max to keep them in the order that we want
        this.minHeap.enqueue(num);
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
		//balance them
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        }
		//console.log(this.minHeap.toArray(), this.maxHeap.toArray()) //run this to understand better
    }

    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) // if one is bigger 21 and 345 example just pop from 345(min heap)
            return this.minHeap.front().element;
        else
            return (this.minHeap.front().element + this.maxHeap.front().element) / 2; // 21 and 34 example, pop 1 and 3 and find average

    }
}