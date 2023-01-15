// weekly contest 327
class Solution {
		public long maxKelements(int[] nums, int k) {
        PriorityQueue<Long> p = new PriorityQueue<Long>((a,b)->Long.compare(b,a));
        for(int o:nums){
            long l = o;
            p.add(l);
        }
        long res = 0;
        while(k > 0){
            long m = p.poll();
            long n = (long)Math.ceil(m/3.0);
            p.add(n);
            res+=m;
            k--;
        }
        return res;
    }
}