func diagonalSum(mat [][]int) int {
	r:=len(mat)
	c:=len(mat[0])
	var s int = 0
	for i:=0 ; i < r; i++ {
			for j:=0; j < c; j++ {
					if i == j {
							s+=mat[i][j]
					} else if i + j == r - 1 {
							s+=mat[i][j]
					}
			}
	}
	return s
}