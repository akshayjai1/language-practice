class OrderedStream {
	constructor(n) {
			this.data = new Array(n)
			this.index = 0
	}
	insert(idKey, value) {
			this.data[idKey - 1] = value
			let chunk = []
			while (this.data[this.index])
					chunk.push(this.data[this.index++])
			return chunk
	};
};
x = new OrderedStream(5)
console.log(x.insert(1, 'a'));
console.log(x.insert(3, 'c'));
console.log(x.insert(2, 'b'));
console.log(x.insert(5, 'e'));
console.log(x.insert(4, 'd'));