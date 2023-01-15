class MyQueue {
    private var firstStack:[Int]
    private var secondStack:[Int]
    private var front:Int!
    init() {
        self.firstStack = []
        self.secondStack = []
    }

    func push(_ x: Int) {
        if firstStack.isEmpty {
            front = x
        }
        self.firstStack.append(x)
    }

    func pop() -> Int {
        if secondStack.isEmpty {
            while !firstStack.isEmpty{
                secondStack.append(firstStack.removeLast())
            }
        }
        return secondStack.removeLast()
    }

    func peek() -> Int {
        if secondStack.isEmpty {
            return front
        } else {
            return secondStack.last!
        }
    }

    func empty() -> Bool {
        return firstStack.isEmpty && secondStack.isEmpty
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = MyQueue()
 * obj.push(x)
 * let ret_2: Int = obj.pop()
 * let ret_3: Int = obj.peek()
 * let ret_4: Bool = obj.empty()
 */