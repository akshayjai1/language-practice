// https://www.youtube.com/watch?v=LSFcmgq0HYY
func sumOddLengthSubarrays(arr []int) int {
	c:=len(arr)
	var s int = 0
	for i:=0; i < c; i++ {
			s += (((i + 1) * (c - i) + 1) / 2)*arr[i]
	}
	return s
}