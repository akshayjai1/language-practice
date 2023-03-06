class BubbleSort{

public static int[] sortArray(int[] nums) {
        int t;
        for(int i = 0; i < nums.length; i++){
            for(int j = 1; j < nums.length - i; j++){
                if(nums[j] > nums[j - 1]){
                    t = nums[j];
                    nums[j] = nums[j - 1];
                    nums[j - 1] = t;
                }
            }
        }
        return nums;
    }
}