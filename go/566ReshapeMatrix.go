// https://leetcode.com/problems/reshape-the-matrix/solutions/1317689/4ms-golang-solution-using-channels-and-go-routine/

func matrixReshape(mat [][]int, r int, c int) [][]int {
	rr:=len(mat)
	cc:=len(mat[0])
	if r * c != rr * cc {
			return mat
	}
	ir,ic := 0,0
	res:=make([][]int, r)
	for d:= range res {
			res[d] = make([]int,c)
	}
	for i:=0; i < rr; i++ {
			for j:=0; j < cc; j++ {
					res[ir][ic] = mat[i][j]
					ic+=1
					if ic >= c {
							ic=0
							ir+=1
					}
			}
	}
	return res
 }