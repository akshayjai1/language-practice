/* we have to move the zeros to end, we will achieve this by moving non zeros to start.
so we keep left pointer and right pointer at 0, if there is zero at left, so we keep increasing r, till we find nonzero, once we find nonzero, we also increment left check if the element is
https://www.youtube.com/watch?v=aayNRwUN3Do
*/
 func moveZeroes(nums []int)  {
	c:=len(nums)
	var l int = 0
	for r:=0; r < c; r++ {
			if nums[r] != 0 {
					nums[l],nums[r] = nums[r],nums[l]
					l++
			}
	}
}