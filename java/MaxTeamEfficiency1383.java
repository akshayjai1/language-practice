import java.util.Arrays;
import java.util.PriorityQueue;

public class MaxTeamEfficiency1383 {
	class Solution {
		public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
			int[][] ess = new int[n][2];
			for (int i = 0; i < n; ++i)
				ess[i] = new int[] { efficiency[i], speed[i] };
			Arrays.sort(ess, (a, b) -> b[0] - a[0]);
			PriorityQueue<Integer> pq = new PriorityQueue<>(k, (a, b) -> a - b);
			long res = 0, sumS = 0;
			for (int[] es : ess) {
				pq.add(es[1]);
				sumS = (sumS + es[1]);
				if (pq.size() > k)
					sumS -= pq.poll();
				res = Math.max(res, (sumS * es[0]));
			}
			return (int) (res % (long) (1e9 + 7));
		}
	}
}
// https://leetcode.com/problems/maximum-performance-of-a-team/discuss/539687/JavaC%2B%2BPython-Priority-Queue
