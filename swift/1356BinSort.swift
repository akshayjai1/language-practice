class Solution {
    func sortByBits(_ arr: [Int]) -> [Int] {
        arr.sorted {
            if $0.nonzeroBitCount != $1.nonzeroBitCount {
                return $0.nonzeroBitCount < $1.nonzeroBitCount
            } else {
                return $0 < $1
            }
        }
    }
}