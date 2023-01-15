class Solution {
    func subtractProductAndSum(_ n: Int) -> Int {
        var sum = 0
        var product = 1
        var n = n
        while n != 0 {
            sum+=n%10
            product*=n%10
            n/=10
        }
        return product - sum
    }
}