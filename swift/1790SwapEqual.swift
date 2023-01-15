
// we are checking <=2 because a swap causes two characters to not match
class Solution {
    func areAlmostEqual(_ s1: String, _ s2: String) -> Bool {
        guard s1 != s2 else { return true}
        guard s1.map{$0}.sorted() == s2.map{$0}.sorted() else {return false}
        var counter = 0

        for (index, ch) in s1.enumerated() {
            if ch != s2[s2.index(s2.startIndex, offsetBy: index)] {
                counter+=1
            }
            guard counter <= 2 else {return false}
        }
        return true
    }
}