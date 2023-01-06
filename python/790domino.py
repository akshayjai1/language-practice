class Solution:
    def numTilings(self, n: int) -> int:
        m = {
            1:1,
            2:2,
            3:5
        }
        for i in range(4,n+1):
            m[i] = 2*m[i-1] + m[i-3]
        return mod(m[n],pow(10,9) +7)