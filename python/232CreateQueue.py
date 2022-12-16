# https://leetcode.com/problems/implement-queue-using-stacks/solutions/64206/short-o-1-amortized-c-java-ruby/
class MyQueue:

    def __init__(self):
        self.inn = []
        self.out = []

    def push(self, x: int) -> None:
        self.inn.append(x)

    def pop(self) -> int:
        self.move()
        return self.out.pop()

    def peek(self) -> int:
        self.move()
        return self.out[-1]

    def empty(self) -> bool:
        return not self.inn and not self.out

    def move(self) -> None:
        if not self.out:
            while self.inn:
                self.out.append(self.inn.pop())



# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()