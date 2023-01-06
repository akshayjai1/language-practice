/* first sort the balloons based on end point from low to high, now first arrow is rightmost position of first balloon */
class Solution {
    public int findMinArrowShots(int[][] points) {
        if(points.length == 0) return 0;
        Arrays.sort(points, (a, b)-> a[1] - b[1]);
        int pos;
        int t = 0;
        int arrowCount = 0;
        while(t < points.length){
            arrowCount++;
            pos = points[t][1];
            while(t < points.length){
                if(pos >= points[t][0] && pos <= points[t][1]){
                    t++;
                } else {
                    break;
                }
            }

        }
        return arrowCount;
    }
}

/*

56 Merge Intervals <- very similar😈
435 Non-overlapping Intervals <- very similar😈
252 Meeting Rooms
253 Meeting Rooms II

 */

 /* better logic,
 int arrowPos = points[0][1];
        int arrowCnt = 1;
        for (int i = 1; i < points.length; i++) {
            if (arrowPos >= points[i][0]) {
                continue;
            }
            arrowCnt++;
            arrowPos = points[i][1];
        }
        return arrowCnt;

  */