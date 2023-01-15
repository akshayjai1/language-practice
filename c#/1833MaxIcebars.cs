public class Solution {
    public int MaxIceCream(int[] costs, int coins) {
        Array.Sort(costs);
        for(int i = 0; i < costs.Length; i++){
            coins-=costs[i];
            if(coins< 0) return i;
        }
        return costs.Length;
    }
}
// greedy
/* first sort, then collect as many icebars as we can */