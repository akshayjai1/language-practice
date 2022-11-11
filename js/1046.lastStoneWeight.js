/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
	// find two highest integers
	// note their indices, second highest have to be removed
	// highest have to be updated
	// run the same program on the array of stones till the time, there is more than one stone
			// find two highest numbers so that we can update stones array

	while(stones.length > 1){
			stones.sort((a,b)=>a-b);
			const [a,b] = [stones.pop(),stones.pop()];
			stones.push(a-b);
	}
	if(stones.length === 1) return stones[0];
	if(stones.length === 0) return 0;

 };
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));