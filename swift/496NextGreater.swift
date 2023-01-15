// https://leetcode.com/problems/next-greater-element-i/solutions/2504211/swift-simplest-solution/
class Solution {
	/// Time: O(n + m). Space: O(1).
    func nextGreaterElement(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        var result: [Int] = []

        for i in 0..<nums1.count {
            for j in 0..<nums2.count {
                if nums2[j] == nums1[i] {
                    result.append(greaterNum(from: j, in: nums2))
                    break
                }
            }
        }
        return result
    }

    private func greaterNum(from index: Int, in array: [Int]) -> Int {
        for i in index..<array.count {
            if array[i] > array[index] {
                return array[i]
            }
        }
        return -1
    }
}
// 2 https://leetcode.com/problems/next-greater-element-i/solutions/2938258/accepted-swift/
class Solution {
    func nextGreaterElement(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        var ii = [Int: Int]()

        for i in 0..<(nums2.count - 1) {
            for j in i..<nums2.count where nums2[j] > nums2[i] {
                ii[nums2[i]] = nums2[j]
                break
            }
        }

        return nums1.map { ii[$0] ?? -1 }
    }
}
// 3 https://leetcode.com/problems/next-greater-element-i/solutions/2879701/sss-swift-simple-solution/
class Solution {
    func nextGreaterElement(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        var result = [Int]()

        for n1 in nums1 {
            var found1 = false, found2 = false
            for n2 in nums2 {
                if n2 == n1 {
                    found1 = true
                    continue
                }
                guard found1 else {
                    continue
                }
                if n2 > n1 {
                    result.append(n2)
                    found2 = true
                    break
                }
            }
            if !found2 {
                result.append(-1)
            }
        }

        return result
    }
}
// 4 https://leetcode.com/problems/next-greater-element-i/solutions/2688334/swift/
class Solution {
    func nextGreaterElement(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        var results: [Int] = []

        for num in nums1 {
            let startingIndex = nums2.firstIndex(of: num)!
            var hasGreaterElement: Bool = false

            for index in startingIndex..<nums2.count {
                if nums2[index] > num {
                    hasGreaterElement = true
                    results.append(nums2[index])
                    break
                }
            }

            if !hasGreaterElement {
                results.append(-1)
            }
        }

        return results
    }
}