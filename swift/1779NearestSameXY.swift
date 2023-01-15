// calculate manhatten distance of all points and whichever point has lowest man hatten distance, we return i, j and
// o(n) complexity
class Solution {
    func nearestValidPoint(_ x: Int, _ y: Int, _ points: [[Int]]) -> Int {
        var (result, dMin) = (-1, Int.max)
        for (i, point) in points.enumerated() {
            let x1 = point[0], y1 = point[1]
            guard x == x1 || y == y1  else {continue}
            let d = abs(x - x1) + abs(y - y1)
            if d < dMin {
                result = i
                dMin = d
            }
        }
        return result

    }
}