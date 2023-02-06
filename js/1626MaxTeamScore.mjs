/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
	let pair = scores.map((s,i)=>[s,ages[i]]);
	/* first sort based on score highest score at end, then if score is same , sort based on age. */
	pair.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
	let dp=pair.map(p=>p[0]); // get score list based on above sort
	for(let i = 0; i < scores.length; i++){
			for(let j = 0; j < i; j++){
					if(pair[j][1]<=pair[i][1]){
							dp[i]= Math.max(dp[i],pair[i][0]+dp[j])
					}
			}
	}
	return Math.max(...dp)
};