// https://leetcode.com/problems/gas-station/solutions/3011028/swift-readable-solution/
class Solution {
    func canCompleteCircuit(_ gas: [Int], _ cost: [Int]) -> Int {
        var globalReserve = 0
        var currentReserve = 0
        var start = 0
        for i in gas.indices {
            currentReserve += gas[i] - cost[i]
            globalReserve += gas[i] - cost[i]
            if currentReserve < 0 {
                currentReserve = 0
                start = i + 1
            }
        }
        if globalReserve < 0 {
            return -1
        } else {
            return start
        }
    }
}