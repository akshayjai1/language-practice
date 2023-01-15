// Count elements less than 0 then modulo 2
func arraySign(nums []int) int {
	negativeNumbers := 0
	for _,num := range nums {
			if num == 0 {
					return 0
			} else if num < 0 {
					negativeNumbers++
			}
	}
	if negativeNumbers % 2 == 0 {
			return 1
	} else {
			return -1
	}
}