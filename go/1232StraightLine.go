// https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/1176782/golang-solution-100-100-with-explanation/
func checkStraightLine(co [][]int) bool {
	x0,y0:=co[0][0],co[0][1]
	x1,y1:=co[1][0],co[1][1]
	for i := 1; i < len(co); i++ {
			x2,y2 := co[i][0],co[i][1]
			if (y2 - y0)*(x1 - x0) != (y1 - y0)*(x2-x0) {
					return false
			}
	}
		 return true
 }

//
func checkStraightLine(coordinates [][]int) bool {
	x := coordinates[1][0]
	fx := (x - coordinates[0][0])

	y := coordinates[1][1]
	fy := (y - coordinates[0][1])

	for i := 1; i < len(coordinates); i++ {
			if fx * (coordinates[i][1] - y) != fy * (coordinates[i][0] - x) {
					return false
			}
	}
	return true
}