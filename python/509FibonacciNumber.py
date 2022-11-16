class Solution:
    def getFib(self,n,d) -> int:
        if d.get(n) is not None:
            return d.get(n)
        else:
            if n == 0 or n == 1:
                d[n] = n
                return d[n]
            else:
                d[n] = self.getFib(n-1,d) + self.getFib(n-2,d)
                return d[n]

    def fib(self, n: int) -> int:
        a=dict();
        return self.getFib(n,a)