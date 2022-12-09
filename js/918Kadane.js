/**
 *
 * @param {*} x array of integers
 */
function kadane(x) {
	let n = x.length;
	let sum = x[0];
	let ans = x[0];
	for(let i = 1;i < n;i++){
		sum += x[i];
		if(sum < x[i]) sum = x[i];
		ans = Math.max(ans, sum);
	}
	return ans;
}