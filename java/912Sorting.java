/* we can use bubble sort.
we sort first two items, using i,j , greater one becomes second
we continue this iteration till j points to last element = n - 1.
Now the biggest element is in the end.
so next iteration should have j going till n - 2
 */
class Solution {
    public int[] sortArray(int[] nums) {
        int t;
        for(int i = 0; i < nums.length; i++){
            for(int j = 1; j < nums.length - i; j++){
                if(nums[j] < nums[j - 1]){
                    t = nums[j];
                    nums[j] = nums[j - 1];
                    nums[j - 1] = t;
                }
            }
        }
        return nums;
    }
}