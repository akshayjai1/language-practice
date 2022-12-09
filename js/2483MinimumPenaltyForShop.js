/**
 * https://leetcode.com/problems/minimum-penalty-for-a-shop/discuss/2850443/C%2B%2B-Solution-with-O(n)-time-oror-Very-Simple-and-Easy-to-Understand
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
	const dp=[0];
	for(let i = 0; i < customers.length; i++){
			if(customers[i]==='Y'){
					dp[0]+=1;
			}
	}
	let hour = 0;
	let penalty = dp[0];
	for(let i = 1; i < customers.length + 1; i++){
			dp[i] = dp[i-1];
			if(dp[i] > 0){
					dp[i]+= customers[i-1]==='Y' ? -1: 1;
			}
			if(penalty > dp[i]){
					penalty = dp[i];
					hour = i
			}
	}
	return hour;
};