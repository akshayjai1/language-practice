// https://leetcode.com/problems/gas-station/solutions/3012534/134-gas-station-in-go-more-optimize-way/
// neet code
// https://leetcode.com/problems/gas-station/solutions/3011223/golang-o-n/
func canCompleteCircuit(gas []int, cost []int) int {
	// Check if the total amount of gas is less than the total cost.
	// If this is the case, it is not possible to complete the circuit.
	totalGas := 0
	totalCost := 0
	for i := range gas {
			// Calculate the total amount of gas and the total cost.
			totalGas += gas[i]
			totalCost += cost[i]
	}
	if totalGas < totalCost {
			// It is not possible to complete the circuit, so return -1.
			return -1
	}

	// Iterate over the gas stations and try to find a starting position
	// such that it is possible to complete the circuit.
	startIndex := 0
	gasInTank := 0
	for i := range gas {
			// Update the amount of gas in the tank.
			gasInTank += gas[i] - cost[i]
			if gasInTank < 0 {
					// It is not possible to reach the next station from the current station.
					// Update the starting position and reset the gas in the tank.
					startIndex = i + 1
					gasInTank = 0
			}
	}
	return startIndex
}