func maximumWealth(accounts [][]int) int {
	r:=len(accounts)
	c:=len(accounts[0])
	var ms int = 0
	for i:=0; i < r ;i++ {
			var s int = 0
			for j := 0;   j < c; j++ {
					s+=accounts[i][j]
			}
			if s > ms {
					ms = s
			}
	}
	return ms
}