<!-- https://leetcode.com/problems/continuous-subarray-sum/solutions/3053952/if-you-get-same-remainder-again-then-subarray-sum-is-multiple-of-k/ -->
class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $k
 * @return Boolean
 */
function checkSubarraySum($nums, $k) {
		$arr = [-1];
		$n = sizeof($nums);
		$sum = 0;
		for($i = 0; $i < $n; $i++){
				$sum+=$nums[$i];
				$rem = $sum % $k;
				if(array_key_exists($rem, $arr)){
						if(($i - $arr[$rem]) > 1){
								return true;
						}
				} else {
						$arr[$rem] = $i;
				}
		}
		return false;
}
}