class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $k
 * @return Integer
 */
function subarraySum($nums, $k) {
		$n = sizeof($nums);
		$count = 0;
		$sum = 0;
		$arr=[1];
		for($i = 0; $i < $n ; $i++){
				$sum += $nums[$i];
				if(array_key_exists($sum -$k, $arr)){
						$count += $arr[$sum - $k];
				}
				if(array_key_exists($sum,$arr)){
						$arr[$sum] = $arr[$sum] + 1;
				} else {
						$arr[$sum] = 1;
				}
		}
		return $count;

}
}