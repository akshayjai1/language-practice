class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        List<List<int[]>> ad = new ArrayList<>();
        for(int i = 0 ;i < n; i++){
            ad.add(new ArrayList<>());
        }
        for(int[] fl: flights){
            ad.get(fl[0]).add(new int []{fl[1],fl[2]});
        }
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{src,0});
        int [] nodeCost = new int[n];
        Arrays.fill(nodeCost,Integer.MAX_VALUE);
        int step = 0;
        while(!q.isEmpty() && step <= k){
            int size = q.size();
            while (size-- > 0) {
            int []cur = q.poll(); int node = cur[0],price=cur[1];
            for(int[] jk: ad.get(node)){
                int neighbour = jk[0],neighbourPrice=jk[1];
                int neighbourCost = price + neighbourPrice;
                if(neighbourCost >= nodeCost[neighbour]) continue;
                nodeCost[neighbour] = neighbourCost;
                q.offer(new int[]{neighbour,neighbourCost});
            }}
            step++;
        }
        return nodeCost[dst] == Integer.MAX_VALUE ? -1 : nodeCost[dst];
    }
}