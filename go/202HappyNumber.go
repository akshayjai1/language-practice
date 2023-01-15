// https://leetcode.com/problems/happy-number/solutions/2317716/go/
func isHappy(n int) bool {
	switch n {
			case 1, 7: return true
			case 2,3,4,5,6,8,9: return false
			default: return isHappy(getSum(n))
	}
}

func getSum(n int ) int {
	var sum int
	var last int
	while n > 0 {
			last = n % 10
			sum += last * last
			n /= 10
	}
	return sum
}