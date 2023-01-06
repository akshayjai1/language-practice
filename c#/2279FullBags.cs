public class Solution {
    public int MaximumBags(int[] capacity, int[] rocks, int additionalRocks) {
        var deltas = capacity.Zip(rocks,(c,r)=>c-r).OrderBy(e=>e);
        int result = 0;
        foreach (int delta in deltas){
            if (additionalRocks < delta)
                break;
            result+=1;
            additionalRocks-=delta;
        }
        return result;
    }
}