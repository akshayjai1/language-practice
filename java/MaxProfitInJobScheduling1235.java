public class MaxProfitInJobScheduling1235 {
	class Solution {
		public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
			int n = startTime.length;
			int[][] jobs = new int[n][3];
			for (int i = 0; i < n; i++) {
				jobs[i] = new int[] { startTime[i], endTime[i], profit[i] };
			}
			// sort jobs based on end times;
			Arrays.sort(jobs, (a, b) -> a[1] - b[1]);
			//         <EndTime, Profit>
			TreeMap<Integer, Integer> dp = new TreeMap<>();
			dp.put(0, 0);
			for (int[] job : jobs) {
				int startTimeForJob = job[0];
				int profitBeforeStartOfThisJob = dp.floorEntry(startTimeForJob).getValue();
				int profitInThisJob = job[2];
				int profitAtEndOfThisJob = profitInThisJob + profitBeforeStartOfThisJob;
				int maxProfitTillNow = dp.lastEntry().getValue();
				if (profitAtEndOfThisJob > maxProfitTillNow) {
					dp.put(job[1], profitAtEndOfThisJob);
				}
			}
			return dp.lastEntry().getValue();
		}
	}
// https://www.youtube.com/watch?v=3kU7VYcmffU

// https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/733167/Thinking-process-Top-down-DP-Bottom-up-DP
}
